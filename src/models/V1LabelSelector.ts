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
import V1LabelSelectorRequirement from './V1LabelSelectorRequirement'

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 * @export
 * @interface V1LabelSelector
 */
export default interface V1LabelSelector extends KubeObject {
  /**
   * matchExpressions is a list of label selector requirements. The requirements are ANDed.
   * @type {Array<V1LabelSelectorRequirement>}
   * @memberof V1LabelSelector
   */
  matchExpressions?: Array<V1LabelSelectorRequirement>

  /**
   * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \"key\", the operator is \"In\", and the values array contains only \"value\". The requirements are ANDed.
   * @type {{ [key: string]: string; }}
   * @memberof V1LabelSelector
   */
  matchLabels?: { [key: string]: string }
}
