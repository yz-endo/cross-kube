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
import V2beta2ExternalMetricSource from './V2beta2ExternalMetricSource'
import V2beta2ObjectMetricSource from './V2beta2ObjectMetricSource'
import V2beta2PodsMetricSource from './V2beta2PodsMetricSource'
import V2beta2ResourceMetricSource from './V2beta2ResourceMetricSource'

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 * @export
 * @interface V2beta2MetricSpec
 */
export default interface V2beta2MetricSpec extends KubeObject {
  /**
   *
   * @type {V2beta2ExternalMetricSource}
   * @memberof V2beta2MetricSpec
   */
  external?: V2beta2ExternalMetricSource

  /**
   *
   * @type {V2beta2ObjectMetricSource}
   * @memberof V2beta2MetricSpec
   */
  object?: V2beta2ObjectMetricSource

  /**
   *
   * @type {V2beta2PodsMetricSource}
   * @memberof V2beta2MetricSpec
   */
  pods?: V2beta2PodsMetricSource

  /**
   *
   * @type {V2beta2ResourceMetricSource}
   * @memberof V2beta2MetricSpec
   */
  resource?: V2beta2ResourceMetricSource

  /**
   * type is the type of metric source.  It should be one of \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object.
   * @type {string}
   * @memberof V2beta2MetricSpec
   */
  type: string
}
