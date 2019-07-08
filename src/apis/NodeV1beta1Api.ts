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
import V1Status from '../models/V1Status'
import V1beta1RuntimeClass from '../models/V1beta1RuntimeClass'
import V1beta1RuntimeClassList from '../models/V1beta1RuntimeClassList'

interface CreateRuntimeClassRequest {
  body: V1beta1RuntimeClass
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

interface DeleteCollectionRuntimeClassRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface DeleteRuntimeClassRequest {
  name: string
  pretty?: string
  dryRun?: string
  gracePeriodSeconds?: number
  orphanDependents?: boolean
  propagationPolicy?: string
  body?: V1DeleteOptions
}

interface ListRuntimeClassRequest {
  pretty?: string
  _continue?: string
  fieldSelector?: string
  labelSelector?: string
  limit?: number
  resourceVersion?: string
  timeoutSeconds?: number
}

interface PatchRuntimeClassRequest {
  name: string
  body: object
  pretty?: string
  dryRun?: string
  fieldManager?: string
  force?: boolean
}

interface ReadRuntimeClassRequest {
  name: string
  pretty?: string
  exact?: boolean
  _export?: boolean
}

interface ReplaceRuntimeClassRequest {
  name: string
  body: V1beta1RuntimeClass
  pretty?: string
  dryRun?: string
  fieldManager?: string
}

/**
 *
 */
export default class NodeV1beta1Api extends runtime.BaseAPI {
  /**
   * create a RuntimeClass
   */
  async createRuntimeClassRaw(
    requestParameters: CreateRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling createRuntimeClass.'
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * create a RuntimeClass
   */
  async createRuntimeClass(
    requestParameters: CreateRuntimeClassRequest
  ): Promise<V1beta1RuntimeClass> {
    const response = await this.createRuntimeClassRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete collection of RuntimeClass
   */
  async deleteCollectionRuntimeClassRaw(
    requestParameters: DeleteCollectionRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete collection of RuntimeClass
   */
  async deleteCollectionRuntimeClass(
    requestParameters: DeleteCollectionRuntimeClassRequest
  ): Promise<V1Status> {
    const response = await this.deleteCollectionRuntimeClassRaw(requestParameters)
    return await response.value()
  }

  /**
   * delete a RuntimeClass
   */
  async deleteRuntimeClassRaw(
    requestParameters: DeleteRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1Status>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling deleteRuntimeClass.'
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * delete a RuntimeClass
   */
  async deleteRuntimeClass(requestParameters: DeleteRuntimeClassRequest): Promise<V1Status> {
    const response = await this.deleteRuntimeClassRaw(requestParameters)
    return await response.value()
  }

  /**
   * get available resources
   */
  async getAPIResourcesRaw(): Promise<runtime.ApiResponse<V1APIResourceList>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/node.k8s.io/v1beta1/`,
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
   * list or watch objects of kind RuntimeClass
   */
  async watchListRuntimeClass(
    requestParameters: ListRuntimeClassRequest,
    callback: (event: runtime.KubeEvent<runtime.ItemType<V1beta1RuntimeClassList>>) => void,
    signal?: AbortSignal
  ): Promise<void> {
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

    await this.requestStream<runtime.ItemType<V1beta1RuntimeClassList>>(
      {
        path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
        signal
      },
      callback
    )
  }

  /**
   * list or watch objects of kind RuntimeClass
   */
  async listRuntimeClassRaw(
    requestParameters: ListRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1beta1RuntimeClassList>> {
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * list or watch objects of kind RuntimeClass
   */
  async listRuntimeClass(
    requestParameters: ListRuntimeClassRequest
  ): Promise<V1beta1RuntimeClassList> {
    const response = await this.listRuntimeClassRaw(requestParameters)
    return await response.value()
  }

  /**
   * partially update the specified RuntimeClass
   */
  async patchRuntimeClassRaw(
    requestParameters: PatchRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling patchRuntimeClass.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling patchRuntimeClass.'
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PATCH',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body as any
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * partially update the specified RuntimeClass
   */
  async patchRuntimeClass(
    requestParameters: PatchRuntimeClassRequest
  ): Promise<V1beta1RuntimeClass> {
    const response = await this.patchRuntimeClassRaw(requestParameters)
    return await response.value()
  }

  /**
   * read the specified RuntimeClass
   */
  async readRuntimeClassRaw(
    requestParameters: ReadRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling readRuntimeClass.'
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * read the specified RuntimeClass
   */
  async readRuntimeClass(requestParameters: ReadRuntimeClassRequest): Promise<V1beta1RuntimeClass> {
    const response = await this.readRuntimeClassRaw(requestParameters)
    return await response.value()
  }

  /**
   * replace the specified RuntimeClass
   */
  async replaceRuntimeClassRaw(
    requestParameters: ReplaceRuntimeClassRequest
  ): Promise<runtime.ApiResponse<V1beta1RuntimeClass>> {
    if (requestParameters.name === null || requestParameters.name === undefined) {
      throw new Error(
        'Required parameter requestParameters.name was null or undefined when calling replaceRuntimeClass.'
      )
    }
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new Error(
        'Required parameter requestParameters.body was null or undefined when calling replaceRuntimeClass.'
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
      path: `/apis/node.k8s.io/v1beta1/runtimeclasses/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(requestParameters.name))
      ),
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * replace the specified RuntimeClass
   */
  async replaceRuntimeClass(
    requestParameters: ReplaceRuntimeClassRequest
  ): Promise<V1beta1RuntimeClass> {
    const response = await this.replaceRuntimeClassRaw(requestParameters)
    return await response.value()
  }
}
