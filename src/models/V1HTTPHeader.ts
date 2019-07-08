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

/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 * @export
 * @interface V1HTTPHeader
 */
export default interface V1HTTPHeader extends KubeObject {
  /**
   * The header field name
   * @type {string}
   * @memberof V1HTTPHeader
   */
  name: string

  /**
   * The header field value
   * @type {string}
   * @memberof V1HTTPHeader
   */
  value: string
}
