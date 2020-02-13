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
import ExtensionsV1beta1DeploymentCondition from './ExtensionsV1beta1DeploymentCondition'

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 * @export
 * @interface ExtensionsV1beta1DeploymentStatus
 */
export default interface ExtensionsV1beta1DeploymentStatus extends KubeObject {
  /**
   * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  availableReplicas?: number

  /**
   * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  collisionCount?: number

  /**
   * Represents the latest available observations of a deployment\'s current state.
   * @type {Array<ExtensionsV1beta1DeploymentCondition>}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  conditions?: Array<ExtensionsV1beta1DeploymentCondition>

  /**
   * The generation observed by the deployment controller.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  observedGeneration?: number

  /**
   * Total number of ready pods targeted by this deployment.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  readyReplicas?: number

  /**
   * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  replicas?: number

  /**
   * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  unavailableReplicas?: number

  /**
   * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentStatus
   */
  updatedReplicas?: number
}
