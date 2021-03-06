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
import NetworkingV1beta1Ingress from './NetworkingV1beta1Ingress'
import V1ListMeta from './V1ListMeta'

/**
 * IngressList is a collection of Ingress.
 * @export
 * @interface NetworkingV1beta1IngressList
 */
export default interface NetworkingV1beta1IngressList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof NetworkingV1beta1IngressList
   */
  apiVersion?: string

  /**
   * Items is the list of Ingress.
   * @type {Array<NetworkingV1beta1Ingress>}
   * @memberof NetworkingV1beta1IngressList
   */
  items: Array<NetworkingV1beta1Ingress>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof NetworkingV1beta1IngressList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof NetworkingV1beta1IngressList
   */
  metadata?: V1ListMeta
}
