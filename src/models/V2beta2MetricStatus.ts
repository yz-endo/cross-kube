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
import V2beta2ExternalMetricStatus from './V2beta2ExternalMetricStatus'
import V2beta2ObjectMetricStatus from './V2beta2ObjectMetricStatus'
import V2beta2PodsMetricStatus from './V2beta2PodsMetricStatus'
import V2beta2ResourceMetricStatus from './V2beta2ResourceMetricStatus'

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface V2beta2MetricStatus
 */
export default interface V2beta2MetricStatus extends KubeObject {
  /**
   *
   * @type {V2beta2ExternalMetricStatus}
   * @memberof V2beta2MetricStatus
   */
  external?: V2beta2ExternalMetricStatus

  /**
   *
   * @type {V2beta2ObjectMetricStatus}
   * @memberof V2beta2MetricStatus
   */
  object?: V2beta2ObjectMetricStatus

  /**
   *
   * @type {V2beta2PodsMetricStatus}
   * @memberof V2beta2MetricStatus
   */
  pods?: V2beta2PodsMetricStatus

  /**
   *
   * @type {V2beta2ResourceMetricStatus}
   * @memberof V2beta2MetricStatus
   */
  resource?: V2beta2ResourceMetricStatus

  /**
   * type is the type of metric source.  It will be one of \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object.
   * @type {string}
   * @memberof V2beta2MetricStatus
   */
  type: string
}
