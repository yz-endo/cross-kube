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
import V1beta1AggregationRule from './V1beta1AggregationRule'
import V1beta1PolicyRule from './V1beta1PolicyRule'

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 * @export
 * @interface V1beta1ClusterRole
 */
export default interface V1beta1ClusterRole extends KubeObject {
  /**
   *
   * @type {V1beta1AggregationRule}
   * @memberof V1beta1ClusterRole
   */
  aggregationRule?: V1beta1AggregationRule

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1ClusterRole
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1ClusterRole
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1ClusterRole
   */
  metadata?: V1ObjectMeta

  /**
   * Rules holds all the PolicyRules for this ClusterRole
   * @type {Array<V1beta1PolicyRule>}
   * @memberof V1beta1ClusterRole
   */
  rules?: Array<V1beta1PolicyRule>
}
