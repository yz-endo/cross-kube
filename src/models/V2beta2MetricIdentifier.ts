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

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 * @export
 * @interface V2beta2MetricIdentifier
 */
export default interface V2beta2MetricIdentifier extends KubeObject {
  /**
   * name is the name of the given metric
   * @type {string}
   * @memberof V2beta2MetricIdentifier
   */
  name: string

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V2beta2MetricIdentifier
   */
  selector?: V1LabelSelector
}
