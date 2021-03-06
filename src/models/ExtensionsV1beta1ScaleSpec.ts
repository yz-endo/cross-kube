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
 * describes the attributes of a scale subresource
 * @export
 * @interface ExtensionsV1beta1ScaleSpec
 */
export default interface ExtensionsV1beta1ScaleSpec extends KubeObject {
  /**
   * desired number of instances for the scaled object.
   * @type {number}
   * @memberof ExtensionsV1beta1ScaleSpec
   */
  replicas?: number
}
