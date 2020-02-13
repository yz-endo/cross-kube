import Pet from '../src/models/V1beta1Pet'

export const defaultRequestOpts = {
  basePath: process.env.KUBE_API_SERVER || 'http://localhost:4000'
}

export async function sleep(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export function petManifest(name: string, category: string, available: boolean = true): Pet {
  return {
    apiVersion: 'group.example.com/v1beta1',
    kind: 'Pet',
    metadata: {
      name
    },
    spec: {
      category
    },
    status: {
      available
    }
  }
}
