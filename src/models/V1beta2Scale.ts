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
import V1beta2ScaleSpec from './V1beta2ScaleSpec'
import V1beta2ScaleStatus from './V1beta2ScaleStatus'

/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface V1beta2Scale
 */
export default interface V1beta2Scale extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta2Scale
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta2Scale
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta2Scale
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1beta2ScaleSpec}
   * @memberof V1beta2Scale
   */
  spec?: V1beta2ScaleSpec

  /**
   *
   * @type {V1beta2ScaleStatus}
   * @memberof V1beta2Scale
   */
  status?: V1beta2ScaleStatus
}
