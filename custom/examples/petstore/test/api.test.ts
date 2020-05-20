import AbortController from 'abort-controller'
import V1Namespace from 'cross-kube/lib/models/V1Namespace'
import Pet from '../src/models/V1beta1Pet'
import { createNamespace, deleteNamespace } from 'cross-kube/lib/apis/CoreV1Api'
import {
  listNamespacedPet,
  readNamespacedPet,
  createNamespacedPet,
  patchNamespacedPet,
  replaceNamespacedPet,
  deleteNamespacedPet,
  watchListNamespacedPet
} from '../src/apis/PetstoreV1beta1Api'
import { KubeEvent } from 'cross-kube'
import { sleep, defaultRequestOpts, petManifest } from './helper'

jest.setTimeout(100000)

const testNamespace = 'petstore-test'

describe('PetstoreV1beta1Api API', () => {
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

  it('lists Pets', async () => {
    const res = await listNamespacedPet({ namespace: testNamespace }, defaultRequestOpts)
    expect(res.kind).toEqual('PetList')
    expect(res.apiVersion).toEqual('group.example.com/v1beta1')
    expect(res.metadata).toBeDefined()
    expect(res.metadata!.selfLink).toEqual(
      `/apis/group.example.com/v1beta1/namespaces/${testNamespace}/pets`
    )
    expect(typeof res.metadata!.resourceVersion).toBe('string')
    expect(res.items).toBeInstanceOf(Array)
  })

  it('creates, reads, patches, replaces and deletes Pets', async () => {
    const pet1 = petManifest('pet-1', 'cat')
    const created = await createNamespacedPet(
      {
        namespace: testNamespace,
        body: pet1
      },
      defaultRequestOpts
    )

    expect(created.kind).toEqual('Pet')
    expect(created.apiVersion).toEqual('group.example.com/v1beta1')
    expect(created.metadata).toBeDefined()
    expect(created.metadata!.name).toEqual('pet-1')
    expect(created.metadata!.selfLink).toEqual(
      `/apis/group.example.com/v1beta1/namespaces/${testNamespace}/pets/pet-1`
    )
    expect(created.spec).toBeDefined()

    const read = await readNamespacedPet(
      {
        namespace: testNamespace,
        name: 'pet-1'
      },
      defaultRequestOpts
    )
    expect(read.metadata!.name).toEqual('pet-1')
    expect(read.spec!.category).toEqual('cat')
    expect(read.status).toBeDefined()
    expect(read.status!.available).toBe(true)

    await sleep(1000)

    const patched = await patchNamespacedPet(
      {
        namespace: testNamespace,
        name: 'pet-1',
        body: Object.assign({}, read, { spec: { category: 'dog' } })
      },
      defaultRequestOpts
    )
    expect(patched.metadata!.name).toEqual('pet-1')
    expect(patched.spec!.category).toEqual('dog')

    await sleep(1000)

    const replaced = await replaceNamespacedPet(
      {
        namespace: testNamespace,
        name: 'pet-1',
        body: Object.assign({}, patched, { spec: { category: 'rabbit' } })
      },
      defaultRequestOpts
    )
    expect(replaced.metadata!.name).toEqual('pet-1')
    expect(replaced.spec!.category).toEqual('rabbit')

    await sleep(1000)

    await deleteNamespacedPet(
      { namespace: testNamespace, name: read.metadata!.name! },
      defaultRequestOpts
    )

    await sleep(1000)

    await expect(
      readNamespacedPet(
        {
          namespace: testNamespace,
          name: 'pet-1'
        },
        defaultRequestOpts
      )
    ).rejects.toThrow(/404: Not Found/)

    try {
      await readNamespacedPet(
        {
          namespace: testNamespace,
          name: 'pet-1'
        },
        defaultRequestOpts
      )
    } catch (err) {
      expect(err.status).toEqual(404)
      expect(err.statusText).toEqual('Not Found')
    }
  })

  it('watches Pet events', async () => {
    const ac = new AbortController()
    const events: KubeEvent<Pet>[] = []
    const watchPromise = watchListNamespacedPet(
      { namespace: testNamespace },
      event => {
        events.push(event)
      },
      defaultRequestOpts,
      { signal: ac.signal }
    )

    await sleep(100)

    expect(events).toHaveLength(0)

    const pet1 = petManifest('pet-1', 'cat')
    await createNamespacedPet(
      {
        namespace: testNamespace,
        body: pet1
      },
      defaultRequestOpts
    )

    await sleep(1000)

    ac.abort()
    try {
      await watchPromise
    } catch (err) {
      // catch AbortError
    }

    expect(events).toHaveLength(1)

    expect(events[0].object!.status!.available).toBe(true)
  })
})
