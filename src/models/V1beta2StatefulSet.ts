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
import V1beta2StatefulSetSpec from './V1beta2StatefulSetSpec'
import V1beta2StatefulSetStatus from './V1beta2StatefulSetStatus'

/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:  - Network: A single stable DNS and hostname.  - Storage: As many VolumeClaims as requested. The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @export
 * @interface V1beta2StatefulSet
 */
export default interface V1beta2StatefulSet extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta2StatefulSet
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta2StatefulSet
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta2StatefulSet
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1beta2StatefulSetSpec}
   * @memberof V1beta2StatefulSet
   */
  spec?: V1beta2StatefulSetSpec

  /**
   *
   * @type {V1beta2StatefulSetStatus}
   * @memberof V1beta2StatefulSet
   */
  status?: V1beta2StatefulSetStatus
}
