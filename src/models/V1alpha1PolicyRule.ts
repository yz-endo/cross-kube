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
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 * @export
 * @interface V1alpha1PolicyRule
 */
export default interface V1alpha1PolicyRule extends KubeObject {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
   * @type {Array<string>}
   * @memberof V1alpha1PolicyRule
   */
  apiGroups?: Array<string>

  /**
   * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path This name is intentionally different than the internal type so that the DefaultConvert works nicely and because the ordering may be different. Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \"pods\" or \"secrets\") or non-resource URL paths (such as \"/api\"),  but not both.
   * @type {Array<string>}
   * @memberof V1alpha1PolicyRule
   */
  nonResourceURLs?: Array<string>

  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
   * @type {Array<string>}
   * @memberof V1alpha1PolicyRule
   */
  resourceNames?: Array<string>

  /**
   * Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
   * @type {Array<string>}
   * @memberof V1alpha1PolicyRule
   */
  resources?: Array<string>

  /**
   * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
   * @type {Array<string>}
   * @memberof V1alpha1PolicyRule
   */
  verbs: Array<string>
}
