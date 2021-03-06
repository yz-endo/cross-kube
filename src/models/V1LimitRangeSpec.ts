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
import V1LimitRangeItem from './V1LimitRangeItem'

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 * @export
 * @interface V1LimitRangeSpec
 */
export default interface V1LimitRangeSpec extends KubeObject {
  /**
   * Limits is the list of LimitRangeItem objects that are enforced.
   * @type {Array<V1LimitRangeItem>}
   * @memberof V1LimitRangeSpec
   */
  limits: Array<V1LimitRangeItem>
}
