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
import V1beta1IPBlock from './V1beta1IPBlock'

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 * @export
 * @interface V1beta1NetworkPolicyPeer
 */
export default interface V1beta1NetworkPolicyPeer extends KubeObject {
  /**
   *
   * @type {V1beta1IPBlock}
   * @memberof V1beta1NetworkPolicyPeer
   */
  ipBlock?: V1beta1IPBlock

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V1beta1NetworkPolicyPeer
   */
  namespaceSelector?: V1LabelSelector

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V1beta1NetworkPolicyPeer
   */
  podSelector?: V1LabelSelector
}
