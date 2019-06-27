import AbortController from 'abort-controller'
import V1Pod from '../src/models/V1Pod'
import V1Namespace from '../src/models/V1Namespace'
import CoreV1Api from '../src/apis/CoreV1Api'
import { KubeEvent } from '../src/runtime'
import { sleep, podManifest } from './helper'

jest.setTimeout(30000)

const apiUrl = process.env.KUBE_API_SERVER || 'http://localhost:4000'

const testNamespace = 'cross-kube-test-v1pod'

describe('V1Pod API', () => {
  let api: CoreV1Api

  beforeAll(async () => {
    api = new CoreV1Api(apiUrl)
    try {
      await api.deleteNamespace({ name: testNamespace })
      // Wait until the namespace is deleted
      await sleep(10000)
    } catch (e) {
      // console.warn(e)
    }
    try {
      const namespace: V1Namespace = {
        metadata: {
          name: testNamespace
        }
      }
      await api.createNamespace({ body: namespace })
      await sleep(3000)
    } catch (e) {
      console.error(e)
    }
  })

  afterAll(async () => {
    await api.deleteNamespace({ name: testNamespace })
  })

  it('lists Pods', async () => {
    const res = await api.listNamespacedPod({ namespace: testNamespace })
    expect(res.kind).toEqual('PodList')
    expect(res.apiVersion).toEqual('v1')
    expect(res.metadata).toBeDefined()
    expect(res.metadata!.selfLink).toEqual(`/api/v1/namespaces/${testNamespace}/pods`)
    expect(typeof res.metadata!.resourceVersion).toBe('string')
    expect(res.items).toBeInstanceOf(Array)
  })

  it('creates, reads, patches, replaces and deletes Pods', async () => {
    const pod1 = podManifest()
    const created = await api.createNamespacedPod({
      namespace: testNamespace,
      body: pod1
    })

    expect(created.kind).toEqual('Pod')
    expect(created.apiVersion).toEqual('v1')
    expect(created.metadata).toBeDefined()
    expect(created.metadata!.name).toEqual('pod-1')
    expect(created.metadata!.selfLink).toEqual(`/api/v1/namespaces/${testNamespace}/pods/pod-1`)
    expect(created.spec).toBeDefined()

    const read = await api.readNamespacedPod({
      namespace: testNamespace,
      name: 'pod-1'
    })
    expect(read.metadata!.name).toEqual('pod-1')
    expect(read.spec!.containers![0].name).toEqual(created.spec!.containers![0].name)
    expect(read.status).toBeDefined()

    await sleep(3000)

    const patched = await api.patchNamespacedPod({
      namespace: testNamespace,
      name: 'pod-1',
      body: {
        metadata: {
          labels: {
            patched: 'true'
          }
        }
      }
    })
    expect(read.metadata!.name).toEqual('pod-1')
    expect(patched.metadata!.labels!['patched']).toEqual('true')

    await sleep(1000)

    const replaced = await api.patchNamespacedPod({
      namespace: testNamespace,
      name: 'pod-1',
      body: podManifest({
        metadata: {
          labels: {
            replaced: 'true'
          }
        }
      })
    })
    expect(read.metadata!.name).toEqual('pod-1')
    expect(replaced.metadata!.labels!['replaced']).toEqual('true')

    await sleep(1000)

    await api.deleteNamespacedPod({ namespace: testNamespace, name: replaced.metadata!.name! })

    await sleep(3000)

    await expect(
      api.readNamespacedPod({
        namespace: testNamespace,
        name: 'pod-1'
      })
    ).rejects.toThrow(/404: Not Found/)
  })

  it('watches Pod events', async () => {
    const ac = new AbortController()
    const events: KubeEvent<V1Pod>[] = []
    const watchPromise = api.watchListNamespacedPod(
      { namespace: testNamespace },
      event => {
        events.push(event)
      },
      ac.signal
    )

    await sleep(100)

    expect(events).toHaveLength(0)

    const pod1 = podManifest()
    await api.createNamespacedPod({
      namespace: testNamespace,
      body: pod1
    })

    await sleep(15000)

    ac.abort()
    try {
      await watchPromise
    } catch (err) {
      // catch AbortError
    }

    expect(events).toHaveLength(4)

    expect(events[0].object!.status!.phase).toEqual('Pending')
    expect(events[0].object!.status!.conditions).toBeUndefined()
    expect(events[1].object!.status!.phase).toEqual('Pending')
    expect(events[1].object!.status!.conditions).toHaveLength(1)
    expect(events[1].object!.status!.containerStatuses).toBeUndefined()
    expect(events[2].object!.status!.phase).toEqual('Pending')
    expect(events[2].object!.status!.containerStatuses).toHaveLength(1)
    expect(events[2].object!.status!.containerStatuses![0].ready).toBe(false)
    expect(events[3].object!.status!.phase).toEqual('Running')
    expect(events[3].object!.status!.containerStatuses).toHaveLength(1)
    expect(events[3].object!.status!.containerStatuses![0].ready).toBe(true)
  })
})
