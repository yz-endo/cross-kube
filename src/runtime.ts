import * as querystring from 'query-string'
import logging from './logging'

const log = {
  debug: logging('cross-kube:runtime:debug')
}

/**
 * Base class of Kubernetes objects
 */
export interface KubeObject {
  apiVersion?: string
  kind?: string
  metadata?: {
    namespace?: string
    name?: string
    resourceVersion?: string
    uid?: string
  }
}

/**
 * Base class of Kubernetes list object
 */
export interface KubeList<T extends KubeObject> extends KubeObject {
  items: Array<T>
}

/**
 * Kubernetes event type
 */
export enum KubeEventType {
  Added = 'ADDED',
  Modified = 'MODIFIED',
  Deleted = 'DELETED'
}

/**
 * Kubernetes event
 */
export interface KubeEvent<T extends KubeObject> {
  type: KubeEventType
  object: T
}

export const DEFAULT_BASE_PATH = 'http://localhost:8080'

// `process.browser` is a flag to distinguish two environments: browser/nodejs
// It will be replaced by Rollup.js to true or false
declare var process: {
  browser: boolean
}

// `Modules` is required to store platform-dependent library objects
//
// Example:
//   let modules: Modules = {
//     fetch: process.browser ? undefined : require('node-fetch')
//   }
//
// The above code will be transpiled into two ESM files:
//
// lib/browser/runtime.js (for browsers):
//   let modules = {
//     fetch: undefined
//   }
// lib/runtime.js (for Node.js):
//   let modules = {
//     fetch: require('node-fetch')
//   }
interface Modules {
  fetch: typeof fetch | undefined
  fetchStream: typeof fetch
  abortController: typeof AbortController | undefined
  stringDecoder: any
}

export let modules: Modules

if (process.browser) {
  modules = {
    fetch: undefined,
    fetchStream: require('fetch-readablestream'),
    abortController: 'AbortController' in window ? AbortController : undefined,
    stringDecoder: undefined
  }
} else {
  const nfetch = require('node-fetch/lib/index.js').default
  const { StringDecoder } = require('string_decoder')
  modules = {
    fetch: nfetch,
    fetchStream: nfetch,
    abortController: require('abort-controller'),
    stringDecoder: StringDecoder
  }
}

/**
 * Base class of Kubernetes APIs
 */
export class BaseAPI {
  /**
   * Constructs the API client.
   *
   * @param configParams - Configuration parameters
   */
  constructor(public basePath: string = DEFAULT_BASE_PATH) {}

  /**
   * Sends an API request and gets the response.
   *
   * @param requestOpts - API request options
   * @returns API response
   */
  protected async request(requestOpts: RequestOpts): Promise<Response> {
    const { input, init } = this.createFetchParams(requestOpts)
    log.debug('request input: %s', input)
    log.debug('request init: %o', init)
    const response = await (process.browser ? fetch(input, init) : modules.fetch!(input, init))
    if (response.status < 200 || response.status >= 300) {
      log.debug('request error: %o', response)
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    return response
  }

  /**
   * Sends an API request and calls the callback function on each receiving event.
   *
   * @param requestOpts - API request options
   * @param callback - Callback function for each event
   */
  protected async requestStream<T>(
    requestOpts: RequestOpts,
    callback: (event: KubeEvent<T>) => void
  ): Promise<void> {
    // JSON boundary is '\n'; Chunk boundary != JSON boundary
    // A chunk can have multiple JSON objects:
    //     '{"type": "ADDED"}\n{"type": "ADDED"}\n'
    // A JSON object can be splitted into multiple chunks:
    //     '{"type": "AD', 'DE', 'D"}\n'
    let buf = ''
    function getChunk(chunk: string) {
      buf += chunk
      while (true) {
        const pos = buf.indexOf('\n')
        if (pos < 0) break
        callback(JSON.parse(buf.slice(0, pos)))
        buf = buf.slice(pos + 1)
      }
    }
    await this.requestChunks(requestOpts, getChunk)
  }

  /**
   * Sends an API request and calls the callback function on each receiving chunk.
   *
   * @param requestOpts - API request options
   * @param callback - Callback function for each chunk
   */
  protected async requestChunks(
    requestOpts: RequestOpts,
    callback: (chunk: string) => void
  ): Promise<void> {
    const { input, init } = this.createFetchParams(requestOpts)
    log.debug('request input: %s', input)
    log.debug('request init: %o', init)
    const response = (await modules.fetchStream(input, init)) as FetchResponse
    if (response.status < 200 || response.status >= 300) {
      log.debug('request error: %o', response)
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    if (!response.body) {
      throw new Error(`Invalid response body ${response.body}`)
    }
    if (process.browser) {
      const reader = response.body.getReader() // Some browsers require polyfill for this
      const decoder = new TextDecoder('utf-8')
      while (true) {
        const { done, value } = await reader.read()
        if (value) {
          callback(decoder.decode(value))
        }
        if (done) {
          break
        }
      }
    } else {
      await new Promise((resolve, reject) => {
        const decoder = new (modules.stringDecoder as typeof StringDecoder)('utf8')
        response.body.on('data', (chunk: Uint8Array) => {
          callback(decoder.write(chunk))
        })
        response.body.on('error', (err: Error) => {
          response.body && response.body.end()
          reject(err)
        })
        response.body.on('end', () => {
          response.body && response.body.end()
          resolve()
        })
      })
    }
  }

  /**
   * Creates fetch parameters from the requirest options.
   *
   * @param requestOpts - API request options
   * @returns Fetch parameters
   */
  private createFetchParams(requestOpts: RequestOpts): FetchParams {
    const qs = () => {
      const { query } = requestOpts
      if (query && Object.keys(query).length > 0) {
        return `?${querystring.stringify(query)}`
      }
      return ''
    }
    let url = this.basePath + requestOpts.path + qs()
    const body = JSON.stringify(requestOpts.body)
    const init = {
      method: requestOpts.method,
      headers: Object.assign({}, this.defaultHTTPHeaders(requestOpts.method), requestOpts.headers),
      body,
      signal: requestOpts.signal
    }
    return { input: url, init }
  }

  private defaultHTTPHeaders(method: string): HTTPHeaders {
    return {
      'Content-Type':
        method === 'PATCH' ? 'application/strategic-merge-patch+json' : 'application/json'
    }
  }
}

/**
 * HTTP method
 */
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD'

/**
 * HTTP headers
 */
export type HTTPHeaders = { [key: string]: string }

/**
 * HTTP query
 */
export type HTTPQuery = {
  [key: string]:
    | string
    | number
    | null
    | boolean
    | Array<string | number | null | boolean>
    | HTTPQuery
}

/**
 * HTTP body
 */
export type HTTPBody = any

/**
 * Fetch parameters
 */
export interface FetchParams {
  input: RequestInfo
  init?: RequestInit
}

/**
 * HTTP request options
 */
export interface RequestOpts {
  path: string
  method: HTTPMethod
  headers: HTTPHeaders
  query?: HTTPQuery
  body?: HTTPBody
  signal?: AbortSignal
}

/**
 * Fetch body stream for both WHATWG fetch and node-fetch
 */
export interface FetchBodyStream<R = any> extends ReadableStream<R> {
  on(event: 'close' | 'end' | 'readable', listener: () => void): this
  on(event: 'data', listener: (chunk: any) => void): this
  on(event: 'error', listener: (err: Error) => void): this
  on(event: string | symbol, listener: (...args: any[]) => void): this
  end(cb?: () => void): void
}

/**
 * Fetch response for both WHATWG fetch and node-fetch
 */
export interface FetchResponse extends Response {
  readonly body: FetchBodyStream<Uint8Array>
}

/**
 * Abstract response base class
 */
export abstract class ApiResponse<T> {
  constructor(public raw: Response) {}

  abstract value(): Promise<T>
}

/**
 * JSON response
 */
export class JSONApiResponse<T> implements ApiResponse<T> {
  constructor(public raw: Response) {}

  async value() {
    return this.raw.json()
  }
}

/**
 * String response
 */
export class StringApiResponse implements ApiResponse<string> {
  constructor(public raw: Response) {}

  async value() {
    return this.raw.text()
  }
}

/**
 * Extracts the item type from a list object
 */
export type ItemType<T> = T extends { items: Array<infer I> }
  ? I extends KubeObject
    ? I
    : never
  : never
