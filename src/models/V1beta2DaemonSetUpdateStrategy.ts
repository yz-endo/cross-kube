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
import V1beta2RollingUpdateDaemonSet from './V1beta2RollingUpdateDaemonSet'

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 * @export
 * @interface V1beta2DaemonSetUpdateStrategy
 */
export default interface V1beta2DaemonSetUpdateStrategy extends KubeObject {
  /**
   *
   * @type {V1beta2RollingUpdateDaemonSet}
   * @memberof V1beta2DaemonSetUpdateStrategy
   */
  rollingUpdate?: V1beta2RollingUpdateDaemonSet

  /**
   * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
   * @type {string}
   * @memberof V1beta2DaemonSetUpdateStrategy
   */
  type?: string
}
