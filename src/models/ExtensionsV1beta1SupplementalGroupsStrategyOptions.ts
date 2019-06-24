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
import ExtensionsV1beta1IDRange from './ExtensionsV1beta1IDRange'

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use SupplementalGroupsStrategyOptions from policy API Group instead.
 * @export
 * @interface ExtensionsV1beta1SupplementalGroupsStrategyOptions
 */
export default interface ExtensionsV1beta1SupplementalGroupsStrategyOptions extends KubeObject {
  /**
   * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
   * @type {Array<ExtensionsV1beta1IDRange>}
   * @memberof ExtensionsV1beta1SupplementalGroupsStrategyOptions
   */
  ranges?: Array<ExtensionsV1beta1IDRange>

  /**
   * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
   * @type {string}
   * @memberof ExtensionsV1beta1SupplementalGroupsStrategyOptions
   */
  rule?: string
}
