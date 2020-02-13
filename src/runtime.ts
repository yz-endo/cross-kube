import * as querystring from 'query-string'
import logging from './logging'

export const DEFAULT_BASE_PATH = 'http://localhost:8080'

const log = {
  warn: logging('cross-kube:runtime:warn'),
  debug: logging('cross-kube:runtime:debug')
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
  basePath: string
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

/**
 * Base interface of Kubernetes objects
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
 * Base interface of Kubernetes list
 */
export interface KubeList<T extends KubeObject> extends KubeObject {
  items?: T[]
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

// `process.browser` is a flag to distinguish two environments: browser/nodejs
// It will be replaced by Rollup.js to true or false
declare var process: {
  browser: boolean
}

const nodeFetch = process.browser ? undefined : require('node-fetch/lib/index.js').default
const fetchStream = process.browser ? require('fetch-readablestream') : nodeFetch
const StringDecoder = process.browser ? undefined : require('string_decoder').StringDecoder

/**
 * Sends an API request and gets the response.
 *
 * @param requestOpts - API request options
 * @returns API response
 */
export async function request(...requestOptsArray: Partial<RequestOpts>[]): Promise<Response> {
  const requestOpts = mergeRequestOpts(...requestOptsArray)
  const { input, init } = createFetchParams(requestOpts)
  log.debug('request input: %s', input)
  log.debug('request init: %o', init)
  const response = await (process.browser ? fetch(input, init) : nodeFetch(input, init))
  if (response.status < 200 || response.status >= 300) {
    const text = await response.text()
    log.debug('request error: %o %o', response, text)
    const error = new Error(`${response.status}: ${response.statusText}`)
    Object.assign(error, {
      status: response.status,
      statusText: response.statusText,
      text
    })
    throw error
  }
  return response
}

/**
 * Sends an API request and calls the callback function on each receiving event.
 *
 * @param requestOpts - API request options
 * @param callback - Callback function for each event
 */
export async function requestStream<T>(
  callback: (event: KubeEvent<T>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
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
  await requestChunks(getChunk, ...requestOptsArray)
}

/**
 * Sends an API request and calls the callback function on each receiving chunk.
 *
 * @param requestOpts - API request options
 * @param callback - Callback function for each chunk
 */
async function requestChunks(
  callback: (chunk: string) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  const requestOpts = mergeRequestOpts(...requestOptsArray)
  const { input, init } = createFetchParams(requestOpts)
  log.debug('request input: %s', input)
  log.debug('request init: %o', init)
  const response = (await fetchStream(input, init)) as FetchResponse
  if (response.status < 200 || response.status >= 300) {
    const text = await response.text()
    log.debug('request error: %o %o', response, text)
    const error = new Error(`${response.status}: ${response.statusText}`)
    Object.assign(error, {
      status: response.status,
      statusText: response.statusText,
      text
    })
    throw error
  }
  if (!response.body) {
    throw new Error(`Invalid response body ${response.body}`)
  }
  if (process.browser) {
    const reader = response.body.getReader() // Some browsers require polyfill for this
    const decoder = new TextDecoder('utf-8')
    while (true) {
      try {
        const { done, value } = await reader.read()
        if (value) {
          callback(decoder.decode(value))
        }
        if (done) {
          break
        }
      } catch (e) {
        if (
          `${e}` === 'TypeError: The expression cannot be converted to return the specified type.'
        ) {
          // Firefox throws this exception
          log.warn('Catch TypeError on reading response from `%s`; continue', input)
          break
        } else {
          throw e
        }
      }
    }
  } else {
    await new Promise((resolve, reject) => {
      const decoder = new StringDecoder('utf8')
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

function defaultHTTPHeaders(method: string): HTTPHeaders {
  return {
    'Content-Type':
      method === 'PATCH' ? 'application/strategic-merge-patch+json' : 'application/json'
  }
}

export function mergeRequestOpts(...requestOptsArray: Partial<RequestOpts>[]): RequestOpts {
  const headers = requestOptsArray.reduce(
    (acc: HTTPHeaders, opts: Partial<RequestOpts>) => Object.assign({}, acc, opts.headers || {}),
    {}
  )
  const merged = Object.assign({ basePath: DEFAULT_BASE_PATH }, ...requestOptsArray, { headers })
  if (merged.path === null || merged.path === undefined) {
    throw new Error('`path` is not specified')
  }
  if (merged.method === null || merged.method === undefined) {
    throw new Error('`method` is not specified')
  }
  return merged
}

/**
 * Creates fetch parameters from the requirest options.
 *
 * @param requestOpts - API request options
 * @returns Fetch parameters
 */
function createFetchParams(requestOpts: RequestOpts): FetchParams {
  const qs = () => {
    const { query } = requestOpts
    if (query && Object.keys(query).length > 0) {
      return `?${querystring.stringify(query)}`
    }
    return ''
  }
  let url = requestOpts.basePath + requestOpts.path + qs()
  const body = JSON.stringify(requestOpts.body)
  const init = {
    method: requestOpts.method,
    headers: Object.assign({}, defaultHTTPHeaders(requestOpts.method), requestOpts.headers),
    body,
    signal: requestOpts.signal
  }
  return { input: url, init }
}
