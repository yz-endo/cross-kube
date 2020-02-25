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
import V1LabelSelector from './V1LabelSelector'
import V1PodTemplateSpec from './V1PodTemplateSpec'

/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 * @export
 * @interface V1beta2ReplicaSetSpec
 */
export default interface V1beta2ReplicaSetSpec extends KubeObject {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   * @type {number}
   * @memberof V1beta2ReplicaSetSpec
   */
  minReadySeconds?: number

  /**
   * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
   * @type {number}
   * @memberof V1beta2ReplicaSetSpec
   */
  replicas?: number

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V1beta2ReplicaSetSpec
   */
  selector: V1LabelSelector

  /**
   *
   * @type {V1PodTemplateSpec}
   * @memberof V1beta2ReplicaSetSpec
   */
  template?: V1PodTemplateSpec
}
