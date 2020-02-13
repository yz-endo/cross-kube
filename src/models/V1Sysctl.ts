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
 * Sysctl defines a kernel parameter to be set
 * @export
 * @interface V1Sysctl
 */
export default interface V1Sysctl extends KubeObject {
  /**
   * Name of a property to set
   * @type {string}
   * @memberof V1Sysctl
   */
  name: string

  /**
   * Value of a property to set
   * @type {string}
   * @memberof V1Sysctl
   */
  value: string
}
