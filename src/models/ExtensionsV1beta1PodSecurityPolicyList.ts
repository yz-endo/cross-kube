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
import ExtensionsV1beta1PodSecurityPolicy from './ExtensionsV1beta1PodSecurityPolicy'
import V1ListMeta from './V1ListMeta'

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects. Deprecated: use PodSecurityPolicyList from policy API Group instead.
 * @export
 * @interface ExtensionsV1beta1PodSecurityPolicyList
 */
export default interface ExtensionsV1beta1PodSecurityPolicyList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof ExtensionsV1beta1PodSecurityPolicyList
   */
  apiVersion?: string

  /**
   * items is a list of schema objects.
   * @type {Array<ExtensionsV1beta1PodSecurityPolicy>}
   * @memberof ExtensionsV1beta1PodSecurityPolicyList
   */
  items: Array<ExtensionsV1beta1PodSecurityPolicy>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof ExtensionsV1beta1PodSecurityPolicyList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof ExtensionsV1beta1PodSecurityPolicyList
   */
  metadata?: V1ListMeta
}
