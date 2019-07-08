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
import V1StatefulSetSpec from './V1StatefulSetSpec'
import V1StatefulSetStatus from './V1StatefulSetStatus'

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:  - Network: A single stable DNS and hostname.  - Storage: As many VolumeClaims as requested. The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 * @export
 * @interface V1StatefulSet
 */
export default interface V1StatefulSet extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1StatefulSet
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1StatefulSet
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1StatefulSet
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1StatefulSetSpec}
   * @memberof V1StatefulSet
   */
  spec?: V1StatefulSetSpec

  /**
   *
   * @type {V1StatefulSetStatus}
   * @memberof V1StatefulSet
   */
  status?: V1StatefulSetStatus
}
