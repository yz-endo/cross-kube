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
import PolicyV1beta1IDRange from './PolicyV1beta1IDRange'

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 * @export
 * @interface PolicyV1beta1FSGroupStrategyOptions
 */
export default interface PolicyV1beta1FSGroupStrategyOptions extends KubeObject {
  /**
   * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
   * @type {Array<PolicyV1beta1IDRange>}
   * @memberof PolicyV1beta1FSGroupStrategyOptions
   */
  ranges?: Array<PolicyV1beta1IDRange>

  /**
   * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
   * @type {string}
   * @memberof PolicyV1beta1FSGroupStrategyOptions
   */
  rule?: string
}
