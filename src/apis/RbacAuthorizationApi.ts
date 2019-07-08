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
import V1APIGroup from '../models/V1APIGroup'

/**
 *
 */
export default class RbacAuthorizationApi extends runtime.BaseAPI {
  /**
   * get information of a group
   */
  async getAPIGroupRaw(): Promise<runtime.ApiResponse<V1APIGroup>> {
    const queryParameters: runtime.HTTPQuery = {}
    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/apis/rbac.authorization.k8s.io/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    })
    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   * get information of a group
   */
  async getAPIGroup(): Promise<V1APIGroup> {
    const response = await this.getAPIGroupRaw()
    return await response.value()
  }
}
