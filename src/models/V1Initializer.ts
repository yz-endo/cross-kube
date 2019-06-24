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
 * Initializer is information about an initializer that has not yet completed.
 * @export
 * @interface V1Initializer
 */
export default interface V1Initializer extends KubeObject {
  /**
   * name of the process that is responsible for initializing this object.
   * @type {string}
   * @memberof V1Initializer
   */
  name: string
}
