// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
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
 *
 */
export default class BatchV1Api extends runtime.BaseAPI {
  /**
   * create a Job
   */
  async createNamespacedJobRaw(
    requestParameters: CreateNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
      ),
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * create a Job
   */
  async createNamespacedJob(requestParameters: CreateNamespacedJobRequest): Promise<V1Job> {
    const response = await this.createNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete collection of Job
   */
  async deleteCollectionNamespacedJobRaw(
    requestParameters: DeleteCollectionNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new Error(
        'Required parameter requestParameters.namespace was null or undefined when calling deleteCollectionNamespacedJob.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete collection of Job
   */
  async deleteCollectionNamespacedJob(
    requestParameters: DeleteCollectionNamespacedJobRequest
  ): Promise<V1Status> {
    const response = await this.deleteCollectionNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete a Job
   */
  async deleteNamespacedJobRaw(
    requestParameters: DeleteNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
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
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete a Job
   */
  async deleteNamespacedJob(requestParameters: DeleteNamespacedJobRequest): Promise<V1Status> {
    const response = await this.deleteNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * get available resources
   */
  async getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * get available resources
   */
  async getAPIResources(): Promise<V1APIResourceList> {
    const response = await this.getAPIResourcesRaw()
    return await response.value()
  }

  /**
   * list or watch objects of kind Job
   */
  async watchListJobForAllNamespaces(
    requestParameters: ListJobForAllNamespacesRequest,
    callback: (event: runtime.KubeEvent<runtime.ItemType<V1JobList>>) => void,
    signal?: AbortSignal
  ): Promise<void> {
    const queryParameters: runtime.HTTPQuery = { watch: true }
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
    const headerParameters: runtime.HTTPHeaders = {}

    await this.requestStream<runtime.ItemType<V1JobList>>(
      {
        path: `/apis/batch/v1/jobs`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
        signal
      },
      callback
    )
  }

  /**
   * list or watch objects of kind Job
   */
  async listJobForAllNamespacesRaw(
    requestParameters: ListJobForAllNamespacesRequest
  ): Promise<runtime.ApiResponse<V1JobList>> {
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/jobs`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * list or watch objects of kind Job
   */
  async listJobForAllNamespaces(
    requestParameters: ListJobForAllNamespacesRequest
  ): Promise<V1JobList> {
    const response = await this.listJobForAllNamespacesRaw(requestParameters)
    return await response.value()
  }

  /**
   * list or watch objects of kind Job
   */
  async watchListNamespacedJob(
    requestParameters: ListNamespacedJobRequest,
    callback: (event: runtime.KubeEvent<runtime.ItemType<V1JobList>>) => void,
    signal?: AbortSignal
  ): Promise<void> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new Error(
        'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedJob.'
      )
    }
    const queryParameters: runtime.HTTPQuery = { watch: true }
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
    const headerParameters: runtime.HTTPHeaders = {}

    await this.requestStream<runtime.ItemType<V1JobList>>(
      {
        path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
          `{${'namespace'}}`,
          encodeURIComponent(String(requestParameters.namespace))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
        signal
      },
      callback
    )
  }

  /**
   * list or watch objects of kind Job
   */
  async listNamespacedJobRaw(
    requestParameters: ListNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1JobList>> {
    if (requestParameters.namespace === null || requestParameters.namespace === undefined) {
      throw new Error(
        'Required parameter requestParameters.namespace was null or undefined when calling listNamespacedJob.'
      )
    }
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(requestParameters.namespace))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * list or watch objects of kind Job
   */
  async listNamespacedJob(requestParameters: ListNamespacedJobRequest): Promise<V1JobList> {
    const response = await this.listNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update the specified Job
   */
  async patchNamespacedJobRaw(
    requestParameters: PatchNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * partially update the specified Job
   */
  async patchNamespacedJob(requestParameters: PatchNamespacedJobRequest): Promise<V1Job> {
    const response = await this.patchNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update status of the specified Job
   */
  async patchNamespacedJobStatusRaw(
    requestParameters: PatchNamespacedJobStatusRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
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
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * partially update status of the specified Job
   */
  async patchNamespacedJobStatus(
    requestParameters: PatchNamespacedJobStatusRequest
  ): Promise<V1Job> {
    const response = await this.patchNamespacedJobStatusRaw(requestParameters)
    return await response.value()
  }

  /**
   * read the specified Job
   */
  async readNamespacedJobRaw(
    requestParameters: ReadNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.exact !== undefined) {
      queryParameters['exact'] = requestParameters.exact
    }
    if (requestParameters._export !== undefined) {
      queryParameters['export'] = requestParameters._export
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * read the specified Job
   */
  async readNamespacedJob(requestParameters: ReadNamespacedJobRequest): Promise<V1Job> {
    const response = await this.readNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * read status of the specified Job
   */
  async readNamespacedJobStatusRaw(
    requestParameters: ReadNamespacedJobStatusRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * read status of the specified Job
   */
  async readNamespacedJobStatus(requestParameters: ReadNamespacedJobStatusRequest): Promise<V1Job> {
    const response = await this.readNamespacedJobStatusRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace the specified Job
   */
  async replaceNamespacedJobRaw(
    requestParameters: ReplaceNamespacedJobRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * replace the specified Job
   */
  async replaceNamespacedJob(requestParameters: ReplaceNamespacedJobRequest): Promise<V1Job> {
    const response = await this.replaceNamespacedJobRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace status of the specified Job
   */
  async replaceNamespacedJobStatusRaw(
    requestParameters: ReplaceNamespacedJobStatusRequest
  ): Promise<runtime.ApiResponse<V1Job>> {
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
    const queryParameters: runtime.HTTPQuery = {}
    if (requestParameters.pretty !== undefined) {
      queryParameters['pretty'] = requestParameters.pretty
    }
    if (requestParameters.dryRun !== undefined) {
      queryParameters['dryRun'] = requestParameters.dryRun
    }
    if (requestParameters.fieldManager !== undefined) {
      queryParameters['fieldManager'] = requestParameters.fieldManager
    }
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
        .replace(`{${'name'}}`, encodeURIComponent(String(requestParameters.name)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(requestParameters.namespace))),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * replace status of the specified Job
   */
  async replaceNamespacedJobStatus(
    requestParameters: ReplaceNamespacedJobStatusRequest
  ): Promise<V1Job> {
    const response = await this.replaceNamespacedJobStatusRaw(requestParameters)
    return await response.value()
  }
}
