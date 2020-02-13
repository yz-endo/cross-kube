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
 * DeploymentCondition describes the state of a deployment at a certain point.
 * @export
 * @interface V1DeploymentCondition
 */
export default interface V1DeploymentCondition extends KubeObject {
  /**
   * Last time the condition transitioned from one status to another.
   * @type {Date}
   * @memberof V1DeploymentCondition
   */
  lastTransitionTime?: Date

  /**
   * The last time this condition was updated.
   * @type {Date}
   * @memberof V1DeploymentCondition
   */
  lastUpdateTime?: Date

  /**
   * A human readable message indicating details about the transition.
   * @type {string}
   * @memberof V1DeploymentCondition
   */
  message?: string

  /**
   * The reason for the condition\'s last transition.
   * @type {string}
   * @memberof V1DeploymentCondition
   */
  reason?: string

  /**
   * Status of the condition, one of True, False, Unknown.
   * @type {string}
   * @memberof V1DeploymentCondition
   */
  status: string

  /**
   * Type of deployment condition.
   * @type {string}
   * @memberof V1DeploymentCondition
   */
  type: string
}
