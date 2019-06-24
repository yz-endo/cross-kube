import * as deepmerge from 'deepmerge'
import { KubeObject } from '../src/runtime'
import V1Pod from '../src/models/V1Pod'

export type NestedPartial<T> =
  | { [K in keyof T]?: T[K] extends Array<infer R> ? Array<NestedPartial<R>> : NestedPartial<T[K]> }
  | T

export function omit(obj: Record<string, any>, ...keys: string[]): Record<string, any> {
  return keys.reduce((acc: Record<string, any>, key: string) => {
    if (key in acc) delete acc[key]
    return acc
  }, Object.assign({}, obj))
}

export async function sleep(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export interface RxTestHelpers {
  hot: Function
}

export interface Namespace extends KubeObject {}
export interface Pod extends KubeObject {}
export interface Service extends KubeObject {
  spec: {
    ports: {
      name: string
      port: number
      protocol?: string
      targetPort?: number
    }[]
  }
}

export function podManifest(overwrite: NestedPartial<V1Pod> = {}): V1Pod {
  const pod: V1Pod = {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
      name: 'pod-1'
    },
    spec: {
      containers: [
        {
          name: 'web',
          image: 'nginx',
          ports: [{ name: 'http', containerPort: 80, protocol: 'TCP' }]
        }
      ]
    }
  }
  return deepmerge(pod, overwrite) as V1Pod
}
