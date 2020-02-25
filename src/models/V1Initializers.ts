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
import V1Initializer from './V1Initializer'
import V1Status from './V1Status'

/**
 * Initializers tracks the progress of initialization.
 * @export
 * @interface V1Initializers
 */
export default interface V1Initializers extends KubeObject {
  /**
   * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
   * @type {Array<V1Initializer>}
   * @memberof V1Initializers
   */
  pending: Array<V1Initializer>

  /**
   *
   * @type {V1Status}
   * @memberof V1Initializers
   */
  result?: V1Status
}
