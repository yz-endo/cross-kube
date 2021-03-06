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

/**
 * ScaleSpec describes the attributes of a scale subresource
 * @export
 * @interface V1beta2ScaleSpec
 */
export default interface V1beta2ScaleSpec extends KubeObject {
  /**
   * desired number of instances for the scaled object.
   * @type {number}
   * @memberof V1beta2ScaleSpec
   */
  replicas?: number
}
