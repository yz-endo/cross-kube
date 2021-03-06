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
import V1Job from '../models/V1Job'
import V1JobList from '../models/V1JobList'
import V1Status from '../models/V1Status'

interface CreateNamespacedJobRequest {
  namespace: string
  body: V1Job
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface DeleteCollectionNamespacedJobRequest {
  namespace: string
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteNamespacedJobRequest {
  name: string
  namespace: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface ListJobForAllNamespacesRequest {
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  pretty?: string
  resourceVersion?: string
  timeoutSeconds?: number
}

interface ListNamespacedJobRequest {
  namespace: string
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface PatchNamespacedJobRequest {
  name: string
  namespace: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface PatchNamespacedJobStatusRequest {
  name: string
  namespace: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface ReadNamespacedJobRequest {
  name: string
  namespace: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReadNamespacedJobStatusRequest {
  name: string
  namespace: string
  pretty?: string
}

interface ReplaceNamespacedJobRequest {
  name: string
  namespace: string
  body: V1Job
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface ReplaceNamespacedJobStatusRequest {
  name: string
  namespace: string
  body: V1Job
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

/**
 * create a Job
 */
export async function createNamespacedJobRaw(
  requestParameters: CreateNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling createNamespacedJob.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling createNamespacedJob.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
      ),
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
 * create a Job
 */
export async function createNamespacedJob(
  requestParameters: CreateNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await createNamespacedJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete collection of Job
 */
export async function deleteCollectionNamespacedJobRaw(
  requestParameters: DeleteCollectionNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedJob.'
    )
  }
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * delete collection of Job
 */
export async function deleteCollectionNamespacedJob(
  requestParameters: DeleteCollectionNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteCollectionNamespacedJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete a Job
 */
export async function deleteNamespacedJobRaw(
  requestParameters: DeleteNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling deleteNamespacedJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedJob.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
 * delete a Job
 */
export async function deleteNamespacedJob(
  requestParameters: DeleteNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteNamespacedJobRaw(requestParameters, ...requestOptsArray)
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
      path: `/apis/batch/v1/`,
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
 * list or watch objects of kind Job
 */
export async function watchListJobForAllNamespaces(
  requestParameters: ListJobForAllNamespacesRequest,
  callback: (event: KubeEvent<ItemType<V1JobList>>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  const queryParameters: HTTPQuery = { watch: true }
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
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  if (requestParameters.resourceVersion !== undefined) {
    queryParameters['resourceVersion'] = requestParameters.resourceVersion
  }
  if (requestParameters.timeoutSeconds !== undefined) {
    queryParameters['timeoutSeconds'] = requestParameters.timeoutSeconds
  }
  const headerParameters: HTTPHeaders = {}

  await requestStream<ItemType<V1JobList>>(
    callback,
    {
      path: `/apis/batch/v1/jobs`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind Job
 */
export async function listJobForAllNamespacesRaw(
  requestParameters: ListJobForAllNamespacesRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1JobList>> {
  const queryParameters: HTTPQuery = {}
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
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
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
      path: `/apis/batch/v1/jobs`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * list or watch objects of kind Job
 */
export async function listJobForAllNamespaces(
  requestParameters: ListJobForAllNamespacesRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1JobList> {
  const response = await listJobForAllNamespacesRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * list or watch objects of kind Job
 */
export async function watchListNamespacedJob(
  requestParameters: ListNamespacedJobRequest,
  callback: (event: KubeEvent<ItemType<V1JobList>>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedJob.'
    )
  }
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

  await requestStream<ItemType<V1JobList>>(
    callback,
    {
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind Job
 */
export async function listNamespacedJobRaw(
  requestParameters: ListNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1JobList>> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedJob.'
    )
  }
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
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
 * list or watch objects of kind Job
 */
export async function listNamespacedJob(
  requestParameters: ListNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1JobList> {
  const response = await listNamespacedJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update the specified Job
 */
export async function patchNamespacedJobRaw(
  requestParameters: PatchNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchNamespacedJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedJob.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchNamespacedJob.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
 * partially update the specified Job
 */
export async function patchNamespacedJob(
  requestParameters: PatchNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await patchNamespacedJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update status of the specified Job
 */
export async function patchNamespacedJobStatusRaw(
  requestParameters: PatchNamespacedJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchNamespacedJobStatus.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedJobStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchNamespacedJobStatus.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
 * partially update status of the specified Job
 */
export async function patchNamespacedJobStatus(
  requestParameters: PatchNamespacedJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await patchNamespacedJobStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read the specified Job
 */
export async function readNamespacedJobRaw(
  requestParameters: ReadNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readNamespacedJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling readNamespacedJob.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read the specified Job
 */
export async function readNamespacedJob(
  requestParameters: ReadNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await readNamespacedJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read status of the specified Job
 */
export async function readNamespacedJobStatusRaw(
  requestParameters: ReadNamespacedJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readNamespacedJobStatus.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling readNamespacedJobStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * read status of the specified Job
 */
export async function readNamespacedJobStatus(
  requestParameters: ReadNamespacedJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await readNamespacedJobStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace the specified Job
 */
export async function replaceNamespacedJobRaw(
  requestParameters: ReplaceNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceNamespacedJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedJob.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceNamespacedJob.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
 * replace the specified Job
 */
export async function replaceNamespacedJob(
  requestParameters: ReplaceNamespacedJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await replaceNamespacedJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace status of the specified Job
 */
export async function replaceNamespacedJobStatusRaw(
  requestParameters: ReplaceNamespacedJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Job>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceNamespacedJobStatus.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedJobStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceNamespacedJobStatus.'
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
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
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
 * replace status of the specified Job
 */
export async function replaceNamespacedJobStatus(
  requestParameters: ReplaceNamespacedJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Job> {
  const response = await replaceNamespacedJobStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}
