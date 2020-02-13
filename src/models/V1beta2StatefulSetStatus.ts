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
import V1beta2StatefulSetCondition from './V1beta2StatefulSetCondition'

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 * @export
 * @interface V1beta2StatefulSetStatus
 */
export default interface V1beta2StatefulSetStatus extends KubeObject {
  /**
   * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
   * @type {number}
   * @memberof V1beta2StatefulSetStatus
   */
  collisionCount?: number

  /**
   * Represents the latest available observations of a statefulset\'s current state.
   * @type {Array<V1beta2StatefulSetCondition>}
   * @memberof V1beta2StatefulSetStatus
   */
  conditions?: Array<V1beta2StatefulSetCondition>

  /**
   * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
   * @type {number}
   * @memberof V1beta2StatefulSetStatus
   */
  currentReplicas?: number

  /**
   * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
   * @type {string}
   * @memberof V1beta2StatefulSetStatus
   */
  currentRevision?: string

  /**
   * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet\'s generation, which is updated on mutation by the API Server.
   * @type {number}
   * @memberof V1beta2StatefulSetStatus
   */
  observedGeneration?: number

  /**
   * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
   * @type {number}
   * @memberof V1beta2StatefulSetStatus
   */
  readyReplicas?: number

  /**
   * replicas is the number of Pods created by the StatefulSet controller.
   * @type {number}
   * @memberof V1beta2StatefulSetStatus
   */
  replicas: number

  /**
   * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
   * @type {string}
   * @memberof V1beta2StatefulSetStatus
   */
  updateRevision?: string

  /**
   * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
   * @type {number}
   * @memberof V1beta2StatefulSetStatus
   */
  updatedReplicas?: number
}
