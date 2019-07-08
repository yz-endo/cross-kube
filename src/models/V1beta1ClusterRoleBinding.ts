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
import V1ObjectMeta from './V1ObjectMeta'
import V1beta1RoleRef from './V1beta1RoleRef'
import V1beta1Subject from './V1beta1Subject'

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 * @export
 * @interface V1beta1ClusterRoleBinding
 */
export default interface V1beta1ClusterRoleBinding extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1ClusterRoleBinding
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1ClusterRoleBinding
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1ClusterRoleBinding
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1beta1RoleRef}
   * @memberof V1beta1ClusterRoleBinding
   */
  roleRef: V1beta1RoleRef

  /**
   * Subjects holds references to the objects the role applies to.
   * @type {Array<V1beta1Subject>}
   * @memberof V1beta1ClusterRoleBinding
   */
  subjects?: Array<V1beta1Subject>
}
