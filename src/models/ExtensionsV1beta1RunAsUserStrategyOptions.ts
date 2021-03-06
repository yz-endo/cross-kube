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
import ExtensionsV1beta1IDRange from './ExtensionsV1beta1IDRange'

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 * @export
 * @interface ExtensionsV1beta1RunAsUserStrategyOptions
 */
export default interface ExtensionsV1beta1RunAsUserStrategyOptions extends KubeObject {
  /**
   * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
   * @type {Array<ExtensionsV1beta1IDRange>}
   * @memberof ExtensionsV1beta1RunAsUserStrategyOptions
   */
  ranges?: Array<ExtensionsV1beta1IDRange>

  /**
   * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
   * @type {string}
   * @memberof ExtensionsV1beta1RunAsUserStrategyOptions
   */
  rule: string
}
