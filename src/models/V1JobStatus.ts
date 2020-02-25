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
import V1JobCondition from './V1JobCondition'

/**
 * JobStatus represents the current state of a Job.
 * @export
 * @interface V1JobStatus
 */
export default interface V1JobStatus extends KubeObject {
  /**
   * The number of actively running pods.
   * @type {number}
   * @memberof V1JobStatus
   */
  active?: number

  /**
   * Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
   * @type {Date}
   * @memberof V1JobStatus
   */
  completionTime?: Date

  /**
   * The latest available observations of an object\'s current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
   * @type {Array<V1JobCondition>}
   * @memberof V1JobStatus
   */
  conditions?: Array<V1JobCondition>

  /**
   * The number of pods which reached phase Failed.
   * @type {number}
   * @memberof V1JobStatus
   */
  failed?: number

  /**
   * Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
   * @type {Date}
   * @memberof V1JobStatus
   */
  startTime?: Date

  /**
   * The number of pods which reached phase Succeeded.
   * @type {number}
   * @memberof V1JobStatus
   */
  succeeded?: number
}
