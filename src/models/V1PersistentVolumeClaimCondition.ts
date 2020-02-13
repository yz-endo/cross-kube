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
 * PersistentVolumeClaimCondition contails details about state of pvc
 * @export
 * @interface V1PersistentVolumeClaimCondition
 */
export default interface V1PersistentVolumeClaimCondition extends KubeObject {
  /**
   * Last time we probed the condition.
   * @type {Date}
   * @memberof V1PersistentVolumeClaimCondition
   */
  lastProbeTime?: Date

  /**
   * Last time the condition transitioned from one status to another.
   * @type {Date}
   * @memberof V1PersistentVolumeClaimCondition
   */
  lastTransitionTime?: Date

  /**
   * Human-readable message indicating details about last transition.
   * @type {string}
   * @memberof V1PersistentVolumeClaimCondition
   */
  message?: string

  /**
   * Unique, this should be a short, machine understandable string that gives the reason for condition\'s last transition. If it reports \"ResizeStarted\" that means the underlying persistent volume is being resized.
   * @type {string}
   * @memberof V1PersistentVolumeClaimCondition
   */
  reason?: string

  /**
   *
   * @type {string}
   * @memberof V1PersistentVolumeClaimCondition
   */
  status: string

  /**
   *
   * @type {string}
   * @memberof V1PersistentVolumeClaimCondition
   */
  type: string
}
