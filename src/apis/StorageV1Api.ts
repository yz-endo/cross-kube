// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.11
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  RequestOpts,
  HTTPHeaders,
  HTTPQuery,
  ApiResponse,
  StringApiResponse,
  JSONApiResponse,
  ItemType,
  KubeEvent,
  request,
  requestStream
} from '../runtime'
import V1APIResourceList from '../models/V1APIResourceList'
import V1DeleteOptions from '../models/V1DeleteOptions'
import V1Status from '../models/V1Status'
import V1StorageClass from '../models/V1StorageClass'
import V1StorageClassList from '../models/V1StorageClassList'
import V1VolumeAttachment from '../models/V1VolumeAttachment'
import V1VolumeAttachmentList from '../models/V1VolumeAttachmentList'

interface CreateStorageClassRequest {
  body: V1StorageClass
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface CreateVolumeAttachmentRequest {
  body: V1VolumeAttachment
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface DeleteCollectionStorageClassRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteCollectionVolumeAttachmentRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteStorageClassRequest {
  name: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface DeleteVolumeAttachmentRequest {
  name: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface ListStorageClassRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface ListVolumeAttachmentRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface PatchStorageClassRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface PatchVolumeAttachmentRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface PatchVolumeAttachmentStatusRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface ReadStorageClassRequest {
  name: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReadVolumeAttachmentRequest {
  name: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReadVolumeAttachmentStatusRequest {
  name: string
  pretty?: string
}

interface ReplaceStorageClassRequest {
  name: string
  body: V1StorageClass
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface ReplaceVolumeAttachmentRequest {
  name: string
  body: V1VolumeAttachment
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface ReplaceVolumeAttachmentStatusRequest {
  name: string
  body: V1VolumeAttachment
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

/**
 * create a StorageClass
 */
export async function createStorageClassRaw(
  requestParameters: CreateStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1StorageClass>> {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling createStorageClass.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * create a StorageClass
 */
export async function createStorageClass(
  requestParameters: CreateStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1StorageClass> {
  const response = await createStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * create a VolumeAttachment
 */
export async function createVolumeAttachmentRaw(
  requestParameters: CreateVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling createVolumeAttachment.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * create a VolumeAttachment
 */
export async function createVolumeAttachment(
  requestParameters: CreateVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await createVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete collection of StorageClass
 */
export async function deleteCollectionStorageClassRaw(
  requestParameters: DeleteCollectionStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete collection of StorageClass
 */
export async function deleteCollectionStorageClass(
  requestParameters: DeleteCollectionStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteCollectionStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete collection of VolumeAttachment
 */
export async function deleteCollectionVolumeAttachmentRaw(
  requestParameters: DeleteCollectionVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete collection of VolumeAttachment
 */
export async function deleteCollectionVolumeAttachment(
  requestParameters: DeleteCollectionVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteCollectionVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete a StorageClass
 */
export async function deleteStorageClassRaw(
  requestParameters: DeleteStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling deleteStorageClass.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.gracePeriodSeconds !== undefined) {
    queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds
  }
  if (requestParameters.orphanDependents !== undefined) {
    queryParameters['orphanDependents'] = requestParameters.orphanDependents
  }
  if (requestParameters.propagationPolicy !== undefined) {
    queryParameters['propagationPolicy'] = requestParameters.propagationPolicy
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete a StorageClass
 */
export async function deleteStorageClass(
  requestParameters: DeleteStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete a VolumeAttachment
 */
export async function deleteVolumeAttachmentRaw(
  requestParameters: DeleteVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling deleteVolumeAttachment.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.gracePeriodSeconds !== undefined) {
    queryParameters['gracePeriodSeconds'] = requestParameters.gracePeriodSeconds
  }
  if (requestParameters.orphanDependents !== undefined) {
    queryParameters['orphanDependents'] = requestParameters.orphanDependents
  }
  if (requestParameters.propagationPolicy !== undefined) {
    queryParameters['propagationPolicy'] = requestParameters.propagationPolicy
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete a VolumeAttachment
 */
export async function deleteVolumeAttachment(
  requestParameters: DeleteVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * get available resources
 */
export async function getAPIResourcesRaw(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIResourceList>> {
  const queryParameters: HTTPQuery = {}
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * get available resources
 */
export async function getAPIResources(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIResourceList> {
  const response = await getAPIResourcesRaw(...requestOptsArray)
  return await response.value()
}

/**
 * list or watch objects of kind StorageClass
 */
export async function watchListStorageClass(
  requestParameters: ListStorageClassRequest,
  callback: (event: KubeEvent<ItemType<V1StorageClassList>>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  const queryParameters: HTTPQuery = { watch: true }
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  await requestStream<ItemType<V1StorageClassList>>(
    callback,
    {
      path: `/apis/storage.k8s.io/v1/storageclasses`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind StorageClass
 */
export async function listStorageClassRaw(
  requestParameters: ListStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1StorageClassList>> {
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * list or watch objects of kind StorageClass
 */
export async function listStorageClass(
  requestParameters: ListStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1StorageClassList> {
  const response = await listStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * list or watch objects of kind VolumeAttachment
 */
export async function watchListVolumeAttachment(
  requestParameters: ListVolumeAttachmentRequest,
  callback: (event: KubeEvent<ItemType<V1VolumeAttachmentList>>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  const queryParameters: HTTPQuery = { watch: true }
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  await requestStream<ItemType<V1VolumeAttachmentList>>(
    callback,
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind VolumeAttachment
 */
export async function listVolumeAttachmentRaw(
  requestParameters: ListVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachmentList>> {
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters._continue !== undefined) {
    queryParameters['continue'] = requestParameters._continue
  }
  if (requestParameters.fieldSelector !== undefined) {
    queryParameters['fieldSelector'] = requestParameters.fieldSelector
  }
  if (requestParameters.labelSelector !== undefined) {
    queryParameters['labelSelector'] = requestParameters.labelSelector
  }
  if (requestParameters.limit !== undefined) {
    queryParameters['limit'] = requestParameters.limit
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * list or watch objects of kind VolumeAttachment
 */
export async function listVolumeAttachment(
  requestParameters: ListVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachmentList> {
  const response = await listVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update the specified StorageClass
 */
export async function patchStorageClassRaw(
  requestParameters: PatchStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1StorageClass>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchStorageClass.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchStorageClass.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  if (requestParameters.force !== undefined) {
    queryParameters['force'] = requestParameters.force
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * partially update the specified StorageClass
 */
export async function patchStorageClass(
  requestParameters: PatchStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1StorageClass> {
  const response = await patchStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update the specified VolumeAttachment
 */
export async function patchVolumeAttachmentRaw(
  requestParameters: PatchVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchVolumeAttachment.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchVolumeAttachment.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  if (requestParameters.force !== undefined) {
    queryParameters['force'] = requestParameters.force
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * partially update the specified VolumeAttachment
 */
export async function patchVolumeAttachment(
  requestParameters: PatchVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await patchVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update status of the specified VolumeAttachment
 */
export async function patchVolumeAttachmentStatusRaw(
  requestParameters: PatchVolumeAttachmentStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchVolumeAttachmentStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchVolumeAttachmentStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  if (requestParameters.force !== undefined) {
    queryParameters['force'] = requestParameters.force
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * partially update status of the specified VolumeAttachment
 */
export async function patchVolumeAttachmentStatus(
  requestParameters: PatchVolumeAttachmentStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await patchVolumeAttachmentStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read the specified StorageClass
 */
export async function readStorageClassRaw(
  requestParameters: ReadStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1StorageClass>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readStorageClass.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.exact !== undefined) {
    queryParameters['exact'] = requestParameters.exact
  }
  if (requestParameters._export !== undefined) {
    queryParameters['export'] = requestParameters._export
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read the specified StorageClass
 */
export async function readStorageClass(
  requestParameters: ReadStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1StorageClass> {
  const response = await readStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read the specified VolumeAttachment
 */
export async function readVolumeAttachmentRaw(
  requestParameters: ReadVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readVolumeAttachment.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.exact !== undefined) {
    queryParameters['exact'] = requestParameters.exact
  }
  if (requestParameters._export !== undefined) {
    queryParameters['export'] = requestParameters._export
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read the specified VolumeAttachment
 */
export async function readVolumeAttachment(
  requestParameters: ReadVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await readVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read status of the specified VolumeAttachment
 */
export async function readVolumeAttachmentStatusRaw(
  requestParameters: ReadVolumeAttachmentStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readVolumeAttachmentStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read status of the specified VolumeAttachment
 */
export async function readVolumeAttachmentStatus(
  requestParameters: ReadVolumeAttachmentStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await readVolumeAttachmentStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace the specified StorageClass
 */
export async function replaceStorageClassRaw(
  requestParameters: ReplaceStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1StorageClass>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceStorageClass.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceStorageClass.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/storageclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * replace the specified StorageClass
 */
export async function replaceStorageClass(
  requestParameters: ReplaceStorageClassRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1StorageClass> {
  const response = await replaceStorageClassRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace the specified VolumeAttachment
 */
export async function replaceVolumeAttachmentRaw(
  requestParameters: ReplaceVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceVolumeAttachment.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceVolumeAttachment.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * replace the specified VolumeAttachment
 */
export async function replaceVolumeAttachment(
  requestParameters: ReplaceVolumeAttachmentRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await replaceVolumeAttachmentRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace status of the specified VolumeAttachment
 */
export async function replaceVolumeAttachmentStatusRaw(
  requestParameters: ReplaceVolumeAttachmentStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1VolumeAttachment>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceVolumeAttachmentStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceVolumeAttachmentStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.dryRun !== undefined) {
    queryParameters['dryRun'] = requestParameters.dryRun
  }
  if (requestParameters.fieldManager !== undefined) {
    queryParameters['fieldManager'] = requestParameters.fieldManager
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/storage.k8s.io/v1/volumeattachments/{name}/status`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * replace status of the specified VolumeAttachment
 */
export async function replaceVolumeAttachmentStatus(
  requestParameters: ReplaceVolumeAttachmentStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1VolumeAttachment> {
  const response = await replaceVolumeAttachmentStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}
