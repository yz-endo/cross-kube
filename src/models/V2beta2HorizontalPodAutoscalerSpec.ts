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
import V2beta2CrossVersionObjectReference from './V2beta2CrossVersionObjectReference'
import V2beta2MetricSpec from './V2beta2MetricSpec'

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 * @export
 * @interface V2beta2HorizontalPodAutoscalerSpec
 */
export default interface V2beta2HorizontalPodAutoscalerSpec extends KubeObject {
  /**
   * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
   * @type {number}
   * @memberof V2beta2HorizontalPodAutoscalerSpec
   */
  maxReplicas: number

  /**
   * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
   * @type {Array<V2beta2MetricSpec>}
   * @memberof V2beta2HorizontalPodAutoscalerSpec
   */
  metrics?: Array<V2beta2MetricSpec>

  /**
   * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
   * @type {number}
   * @memberof V2beta2HorizontalPodAutoscalerSpec
   */
  minReplicas?: number

  /**
   *
   * @type {V2beta2CrossVersionObjectReference}
   * @memberof V2beta2HorizontalPodAutoscalerSpec
   */
  scaleTargetRef: V2beta2CrossVersionObjectReference
}
