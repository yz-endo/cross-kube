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
import V1ObjectMeta from './V1ObjectMeta'
import V1alpha1PolicyRule from './V1alpha1PolicyRule'

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 * @export
 * @interface V1alpha1Role
 */
export default interface V1alpha1Role extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1alpha1Role
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1alpha1Role
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1alpha1Role
   */
  metadata?: V1ObjectMeta

  /**
   * Rules holds all the PolicyRules for this Role
   * @type {Array<V1alpha1PolicyRule>}
   * @memberof V1alpha1Role
   */
  rules?: Array<V1alpha1PolicyRule>
}
