// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.14.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { KubeObject } from '../runtime'
import V2beta2MetricTarget from './V2beta2MetricTarget'

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \"pods\" source.  Only one \"target\" type should be set.
 * @export
 * @interface V2beta2ResourceMetricSource
 */
export default interface V2beta2ResourceMetricSource extends KubeObject {
  /**
   * name is the name of the resource in question.
   * @type {string}
   * @memberof V2beta2ResourceMetricSource
   */
  name: string

  /**
   *
   * @type {V2beta2MetricTarget}
   * @memberof V2beta2ResourceMetricSource
   */
  target: V2beta2MetricTarget
}
