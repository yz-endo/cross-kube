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

import { KubeObject } from '../runtime'
import V1ListMeta from './V1ListMeta'
import V1RoleBinding from './V1RoleBinding'

/**
 * RoleBindingList is a collection of RoleBindings
 * @export
 * @interface V1RoleBindingList
 */
export default interface V1RoleBindingList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1RoleBindingList
   */
  apiVersion?: string

  /**
   * Items is a list of RoleBindings
   * @type {Array<V1RoleBinding>}
   * @memberof V1RoleBindingList
   */
  items: Array<V1RoleBinding>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1RoleBindingList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1RoleBindingList
   */
  metadata?: V1ListMeta
}
