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
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 * @export
 * @interface V2beta2MetricTarget
 */
export default interface V2beta2MetricTarget extends KubeObject {
  /**
   * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
   * @type {number}
   * @memberof V2beta2MetricTarget
   */
  averageUtilization?: number

  /**
   * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
   * @type {string}
   * @memberof V2beta2MetricTarget
   */
  averageValue?: string

  /**
   * type represents whether the metric type is Utilization, Value, or AverageValue
   * @type {string}
   * @memberof V2beta2MetricTarget
   */
  type: string

  /**
   * value is the target value of the metric (as a quantity).
   * @type {string}
   * @memberof V2beta2MetricTarget
   */
  value?: string
}
