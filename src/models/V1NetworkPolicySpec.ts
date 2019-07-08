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
import V1NetworkPolicyEgressRule from './V1NetworkPolicyEgressRule'
import V1NetworkPolicyIngressRule from './V1NetworkPolicyIngressRule'

/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 * @export
 * @interface V1NetworkPolicySpec
 */
export default interface V1NetworkPolicySpec extends KubeObject {
  /**
   * List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
   * @type {Array<V1NetworkPolicyEgressRule>}
   * @memberof V1NetworkPolicySpec
   */
  egress?: Array<V1NetworkPolicyEgressRule>

  /**
   * List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod\'s local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
   * @type {Array<V1NetworkPolicyIngressRule>}
   * @memberof V1NetworkPolicySpec
   */
  ingress?: Array<V1NetworkPolicyIngressRule>

  /**
   *
   * @type {V1LabelSelector}
   * @memberof V1NetworkPolicySpec
   */
  podSelector: V1LabelSelector

  /**
   * List of rule types that the NetworkPolicy relates to. Valid options are \"Ingress\", \"Egress\", or \"Ingress,Egress\". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ \"Egress\" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include \"Egress\" (since such a policy would not include an Egress section and would otherwise default to just [ \"Ingress\" ]). This field is beta-level in 1.8
   * @type {Array<string>}
   * @memberof V1NetworkPolicySpec
   */
  policyTypes?: Array<string>
}
