import AbortController from 'abort-controller'
import V1Pod from '../src/models/V1Pod'
import V1Namespace from '../src/models/V1Namespace'
import {
  createNamespace,
  deleteNamespace,
  listNamespacedPod,
  createNamespacedPod,
  readNamespacedPod,
  patchNamespacedPod,
  replaceNamespacedPod,
  deleteNamespacedPod,
  watchListNamespacedPod
} from '../src/apis/CoreV1Api'
import { KubeEvent } from '../src/runtime'
import { defaultRequestOpts, sleep, podManifest } from './helper'

jest.setTimeout(120000)

const testNamespace = 'cross-kube-test-v1pod'

describe('V1Pod API', () => {
  beforeAll(async () => {
    try {
      await deleteNamespace({ name: testNamespace }, defaultRequestOpts)
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
      await createNamespace({ body: namespace }, defaultRequestOpts)
      await sleep(3000)
    } catch (e) {
      console.error(e)
    }
  })

  afterAll(async () => {
    await deleteNamespace({ name: testNamespace }, defaultRequestOpts)
  })

  it('lists Pods', async () => {
    const res = await listNamespacedPod({ namespace: testNamespace }, defaultRequestOpts)
    expect(res.kind).toEqual('PodList')
    expect(res.apiVersion).toEqual('v1')
    expect(res.metadata).toBeDefined()
    expect(res.metadata!.selfLink).toEqual(`/api/v1/namespaces/${testNamespace}/pods`)
    expect(typeof res.metadata!.resourceVersion).toBe('string')
    expect(res.items).toBeInstanceOf(Array)
  })

  it('creates, reads, patches, replaces and deletes Pods', async () => {
    const pod1 = podManifest()
    const created = await createNamespacedPod(
      {
        namespace: testNamespace,
        body: pod1
      },
      defaultRequestOpts
    )

    expect(created.kind).toEqual('Pod')
    expect(created.apiVersion).toEqual('v1')
    expect(created.metadata).toBeDefined()
    expect(created.metadata!.name).toEqual('pod-1')
    expect(created.metadata!.selfLink).toEqual(`/api/v1/namespaces/${testNamespace}/pods/pod-1`)
    expect(created.spec).toBeDefined()

    const read = await readNamespacedPod(
      {
        namespace: testNamespace,
        name: 'pod-1'
      },
      defaultRequestOpts
    )
    expect(read.metadata!.name).toEqual('pod-1')
    expect(read.spec!.containers![0].name).toEqual(created.spec!.containers![0].name)
    expect(read.status).toBeDefined()

    await sleep(3000)

    const patched = await patchNamespacedPod(
      {
        namespace: testNamespace,
        name: 'pod-1',
        body: {
          metadata: {
            labels: {
              patched: 'true'
            }
          }
        }
      },
      defaultRequestOpts
    )
    expect(patched.metadata!.name).toEqual('pod-1')
    expect(patched.metadata!.labels!['patched']).toEqual('true')

    await sleep(1000)

    const replaced = await replaceNamespacedPod(
      {
        namespace: testNamespace,
        name: 'pod-1',
        body: Object.assign({}, patched, {
          spec: Object.assign({}, patched.spec, {
            activeDeadlineSeconds: 100
          })
        })
      },
      defaultRequestOpts
    )
    expect(replaced.metadata!.name).toEqual('pod-1')
    expect(replaced.spec!.activeDeadlineSeconds).toEqual(100)

    await sleep(1000)

    await deleteNamespacedPod(
      { namespace: testNamespace, name: replaced.metadata!.name! },
      defaultRequestOpts
    )

    let err: Error | undefined = undefined
    for (let i = 0; i < 40; i++) {
      await sleep(2000)
      try {
        await readNamespacedPod(
          {
            namespace: testNamespace,
            name: 'pod-1'
          },
          defaultRequestOpts
        )
      } catch (e) {
        err = e
        break
      }
    }
    expect(err).toBeInstanceOf(Error)
    expect(err!.toString()).toMatch(/404: Not Found/)

    try {
      await readNamespacedPod(
        {
          namespace: testNamespace,
          name: 'pod-1'
        },
        defaultRequestOpts
      )
    } catch (err) {
      expect(err.status).toEqual(404)
      expect(err.statusText).toEqual('Not Found')
    }
  })

  it('watches Pod events', async () => {
    const ac = new AbortController()
    const events: KubeEvent<V1Pod>[] = []
    const watchPromise = watchListNamespacedPod(
      { namespace: testNamespace },
      event => {
        events.push(event)
      },
      defaultRequestOpts,
      { signal: ac.signal }
    )

    await sleep(100)

    expect(events).toHaveLength(0)

    const pod1 = podManifest()
    await createNamespacedPod(
      {
        namespace: testNamespace,
        body: pod1
      },
      defaultRequestOpts
    )

    await sleep(20000)

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
