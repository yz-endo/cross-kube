import * as deepmerge from 'deepmerge'
import V1Pod from '../src/models/V1Pod'

export const defaultRequestOpts = {
  basePath: process.env.KUBE_API_SERVER || 'http://localhost:4000'
}

export type NestedPartial<T> =
  | { [K in keyof T]?: T[K] extends Array<infer R> ? Array<NestedPartial<R>> : NestedPartial<T[K]> }
  | T

export async function sleep(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms))
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
