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
 * DEPRECATED.
 * @export
 * @interface ExtensionsV1beta1RollbackConfig
 */
export default interface ExtensionsV1beta1RollbackConfig extends KubeObject {
  /**
   * The revision to rollback to. If set to 0, rollback to the last revision.
   * @type {number}
   * @memberof ExtensionsV1beta1RollbackConfig
   */
  revision?: number
}
