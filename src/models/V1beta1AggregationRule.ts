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
import V1LabelSelector from './V1LabelSelector'

/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 * @export
 * @interface V1beta1AggregationRule
 */
export default interface V1beta1AggregationRule extends KubeObject {
  /**
   * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole\'s permissions will be added
   * @type {Array<V1LabelSelector>}
   * @memberof V1beta1AggregationRule
   */
  clusterRoleSelectors?: Array<V1LabelSelector>
}
