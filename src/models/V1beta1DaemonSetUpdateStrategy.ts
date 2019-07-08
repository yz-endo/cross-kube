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
import V1beta1RollingUpdateDaemonSet from './V1beta1RollingUpdateDaemonSet'

/**
 *
 * @export
 * @interface V1beta1DaemonSetUpdateStrategy
 */
export default interface V1beta1DaemonSetUpdateStrategy extends KubeObject {
  /**
   *
   * @type {V1beta1RollingUpdateDaemonSet}
   * @memberof V1beta1DaemonSetUpdateStrategy
   */
  rollingUpdate?: V1beta1RollingUpdateDaemonSet

  /**
   * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is OnDelete.
   * @type {string}
   * @memberof V1beta1DaemonSetUpdateStrategy
   */
  type?: string
}
