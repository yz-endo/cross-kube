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
 * JobCondition describes current state of a job.
 * @export
 * @interface V1JobCondition
 */
export default interface V1JobCondition extends KubeObject {
  /**
   * Last time the condition was checked.
   * @type {Date}
   * @memberof V1JobCondition
   */
  lastProbeTime?: Date

  /**
   * Last time the condition transit from one status to another.
   * @type {Date}
   * @memberof V1JobCondition
   */
  lastTransitionTime?: Date

  /**
   * Human readable message indicating details about last transition.
   * @type {string}
   * @memberof V1JobCondition
   */
  message?: string

  /**
   * (brief) reason for the condition\'s last transition.
   * @type {string}
   * @memberof V1JobCondition
   */
  reason?: string

  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof V1JobCondition
   */
  status: string

  /**
   * Type of job condition, Complete or Failed.
   * @type {string}
   * @memberof V1JobCondition
   */
  type: string
}
