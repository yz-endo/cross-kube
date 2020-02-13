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
 * VolumeError captures an error encountered during a volume operation.
 * @export
 * @interface V1VolumeError
 */
export default interface V1VolumeError extends KubeObject {
  /**
   * String detailing the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
   * @type {string}
   * @memberof V1VolumeError
   */
  message?: string

  /**
   * Time the error was encountered.
   * @type {Date}
   * @memberof V1VolumeError
   */
  time?: Date
}
