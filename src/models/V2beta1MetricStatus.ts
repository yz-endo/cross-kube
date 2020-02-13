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
import V2beta1ExternalMetricStatus from './V2beta1ExternalMetricStatus'
import V2beta1ObjectMetricStatus from './V2beta1ObjectMetricStatus'
import V2beta1PodsMetricStatus from './V2beta1PodsMetricStatus'
import V2beta1ResourceMetricStatus from './V2beta1ResourceMetricStatus'

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface V2beta1MetricStatus
 */
export default interface V2beta1MetricStatus extends KubeObject {
  /**
   *
   * @type {V2beta1ExternalMetricStatus}
   * @memberof V2beta1MetricStatus
   */
  external?: V2beta1ExternalMetricStatus

  /**
   *
   * @type {V2beta1ObjectMetricStatus}
   * @memberof V2beta1MetricStatus
   */
  object?: V2beta1ObjectMetricStatus

  /**
   *
   * @type {V2beta1PodsMetricStatus}
   * @memberof V2beta1MetricStatus
   */
  pods?: V2beta1PodsMetricStatus

  /**
   *
   * @type {V2beta1ResourceMetricStatus}
   * @memberof V2beta1MetricStatus
   */
  resource?: V2beta1ResourceMetricStatus

  /**
   * type is the type of metric source.  It will be one of \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object.
   * @type {string}
   * @memberof V2beta1MetricStatus
   */
  type: string
}
