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
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 * @export
 * @interface V1LabelSelectorRequirement
 */
export default interface V1LabelSelectorRequirement extends KubeObject {
  /**
   * key is the label key that the selector applies to.
   * @type {string}
   * @memberof V1LabelSelectorRequirement
   */
  key: string

  /**
   * operator represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
   * @type {string}
   * @memberof V1LabelSelectorRequirement
   */
  operator: string

  /**
   * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
   * @type {Array<string>}
   * @memberof V1LabelSelectorRequirement
   */
  values?: Array<string>
}
