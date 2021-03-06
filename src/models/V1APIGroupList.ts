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

import { KubeObject } from '../runtime'
import V1APIGroup from './V1APIGroup'

/**
 * APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
 * @export
 * @interface V1APIGroupList
 */
export default interface V1APIGroupList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1APIGroupList
   */
  apiVersion?: string

  /**
   * groups is a list of APIGroup.
   * @type {Array<V1APIGroup>}
   * @memberof V1APIGroupList
   */
  groups: Array<V1APIGroup>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1APIGroupList
   */
  kind?: string
}
