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
import V1APIGroup from '../models/V1APIGroup'

/**
 * get information of a group
 */
export async function getAPIGroupRaw(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<ApiResponse<V1APIGroup>> {
  const queryParameters: HTTPQuery = {}
  const headerParameters: HTTPHeaders = {}

  const response = await request(
    {
      path: `/apis/events.k8s.io/`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters
    },
    ...requestOptsArray
  )
  return new JSONApiResponse<any>(response)
}

/**
 * get information of a group
 */
export async function getAPIGroup(
  ...requestOptsArray: Partial<RequestOpts>[]
): Promise<V1APIGroup> {
  const response = await getAPIGroupRaw(...requestOptsArray)
  return await response.value()
}
