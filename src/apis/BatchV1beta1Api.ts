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
import V1beta1CronJob from '../models/V1beta1CronJob'
import V1beta1CronJobList from '../models/V1beta1CronJobList'

interface CreateNamespacedCronJobRequest {
  namespace: string
  body: V1beta1CronJob
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface DeleteCollectionNamespacedCronJobRequest {
  namespace: string
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteNamespacedCronJobRequest {
  name: string
  namespace: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface ListCronJobForAllNamespacesRequest {
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  pretty?: string
  resourceVersion?: string
  timeoutSeconds?: number
}

interface ListNamespacedCronJobRequest {
  namespace: string
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface PatchNamespacedCronJobRequest {
  name: string
  namespace: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface PatchNamespacedCronJobStatusRequest {
  name: string
  namespace: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface ReadNamespacedCronJobRequest {
  name: string
  namespace: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReadNamespacedCronJobStatusRequest {
  name: string
  namespace: string
  pretty?: string
}

interface ReplaceNamespacedCronJobRequest {
  name: string
  namespace: string
  body: V1beta1CronJob
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface ReplaceNamespacedCronJobStatusRequest {
  name: string
  namespace: string
  body: V1beta1CronJob
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

/**
 * create a CronJob
 */
export async function createNamespacedCronJobRaw(
  requestParameters: CreateNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling createNamespacedCronJob.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling createNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs`.replace(
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
 * create a CronJob
 */
export async function createNamespacedCronJob(
  requestParameters: CreateNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await createNamespacedCronJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * delete collection of CronJob
 */
export async function deleteCollectionNamespacedCronJobRaw(
  requestParameters: DeleteCollectionNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs`.replace(
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
 * delete collection of CronJob
 */
export async function deleteCollectionNamespacedCronJob(
  requestParameters: DeleteCollectionNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteCollectionNamespacedCronJobRaw(
    requestParameters,
    ...requestOptsArray
  )
  return await response.value()
}

/**
 * delete a CronJob
 */
export async function deleteNamespacedCronJobRaw(
  requestParameters: DeleteNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1Status>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling deleteNamespacedCronJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling deleteNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}`
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
 * delete a CronJob
 */
export async function deleteNamespacedCronJob(
  requestParameters: DeleteNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1Status> {
  const response = await deleteNamespacedCronJobRaw(requestParameters, ...requestOptsArray)
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
      path: `/apis/batch/v1beta1/`,
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
 * list or watch objects of kind CronJob
 */
export async function watchListCronJobForAllNamespaces(
  requestParameters: ListCronJobForAllNamespacesRequest,
  callback: (event: KubeEvent<ItemType<V1beta1CronJobList>>) => void,
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

  await requestStream<ItemType<V1beta1CronJobList>>(
    callback,
    {
      path: `/apis/batch/v1beta1/cronjobs`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
}

/**
 * list or watch objects of kind CronJob
 */
export async function listCronJobForAllNamespacesRaw(
  requestParameters: ListCronJobForAllNamespacesRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJobList>> {
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
      path: `/apis/batch/v1beta1/cronjobs`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * list or watch objects of kind CronJob
 */
export async function listCronJobForAllNamespaces(
  requestParameters: ListCronJobForAllNamespacesRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJobList> {
  const response = await listCronJobForAllNamespacesRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * list or watch objects of kind CronJob
 */
export async function watchListNamespacedCronJob(
  requestParameters: ListNamespacedCronJobRequest,
  callback: (event: KubeEvent<ItemType<V1beta1CronJobList>>) => void,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<void> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedCronJob.'
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

  await requestStream<ItemType<V1beta1CronJobList>>(
    callback,
    {
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs`.replace(
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
 * list or watch objects of kind CronJob
 */
export async function listNamespacedCronJobRaw(
  requestParameters: ListNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJobList>> {
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs`.replace(
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
 * list or watch objects of kind CronJob
 */
export async function listNamespacedCronJob(
  requestParameters: ListNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJobList> {
  const response = await listNamespacedCronJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update the specified CronJob
 */
export async function patchNamespacedCronJobRaw(
  requestParameters: PatchNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchNamespacedCronJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedCronJob.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}`
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
 * partially update the specified CronJob
 */
export async function patchNamespacedCronJob(
  requestParameters: PatchNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await patchNamespacedCronJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * partially update status of the specified CronJob
 */
export async function patchNamespacedCronJobStatusRaw(
  requestParameters: PatchNamespacedCronJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling patchNamespacedCronJobStatus.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling patchNamespacedCronJobStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling patchNamespacedCronJobStatus.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status`
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
 * partially update status of the specified CronJob
 */
export async function patchNamespacedCronJobStatus(
  requestParameters: PatchNamespacedCronJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await patchNamespacedCronJobStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read the specified CronJob
 */
export async function readNamespacedCronJobRaw(
  requestParameters: ReadNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readNamespacedCronJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling readNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}`
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
 * read the specified CronJob
 */
export async function readNamespacedCronJob(
  requestParameters: ReadNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await readNamespacedCronJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * read status of the specified CronJob
 */
export async function readNamespacedCronJobStatusRaw(
  requestParameters: ReadNamespacedCronJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling readNamespacedCronJobStatus.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling readNamespacedCronJobStatus.'
    )
  }
  const queryParameters: HTTPQuery = {}
  if (requestParameters.pretty !== undefined) {
    queryParameters['pretty'] = requestParameters.pretty
  }
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status`
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
 * read status of the specified CronJob
 */
export async function readNamespacedCronJobStatus(
  requestParameters: ReadNamespacedCronJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await readNamespacedCronJobStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace the specified CronJob
 */
export async function replaceNamespacedCronJobRaw(
  requestParameters: ReplaceNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceNamespacedCronJob.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedCronJob.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceNamespacedCronJob.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}`
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
 * replace the specified CronJob
 */
export async function replaceNamespacedCronJob(
  requestParameters: ReplaceNamespacedCronJobRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await replaceNamespacedCronJobRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}

/**
 * replace status of the specified CronJob
 */
export async function replaceNamespacedCronJobStatusRaw(
  requestParameters: ReplaceNamespacedCronJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1beta1CronJob>> {
  if (requestParameters.name === null || requestParameters.name === undefined) {
    throw new Error(
      'Required parameter requestParameters.name was null or undefined when calling replaceNamespacedCronJobStatus.'
    )
  }
  if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
    throw new Error(
      'Required parameter requestParameters.namespace was null or undefined when calling replaceNamespacedCronJobStatus.'
    )
  }
  if (requestParameters.body === null || requestParameters.body === undefined) {
    throw new Error(
      'Required parameter requestParameters.body was null or undefined when calling replaceNamespacedCronJobStatus.'
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
      path: `/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status`
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
 * replace status of the specified CronJob
 */
export async function replaceNamespacedCronJobStatus(
  requestParameters: ReplaceNamespacedCronJobStatusRequest,
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1beta1CronJob> {
  const response = await replaceNamespacedCronJobStatusRaw(requestParameters, ...requestOptsArray)
  return await response.value()
}
