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

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
 * @export
 * @interface V1ResourceRule
 */
export default interface V1ResourceRule extends KubeObject {
  /**
   * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  \"*\" means all.
   * @type {Array<string>}
   * @memberof V1ResourceRule
   */
  apiGroups?: Array<string>

  /**
   * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  \"*\" means all.
   * @type {Array<string>}
   * @memberof V1ResourceRule
   */
  resourceNames?: Array<string>

  /**
   * Resources is a list of resources this rule applies to.  \"*\" means all in the specified apiGroups.  \"*_/foo\" represents the subresource \'foo\' for all resources in the specified apiGroups.
   * @type {Array<string>}
   * @memberof V1ResourceRule
   */
  resources?: Array<string>

  /**
   * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
   * @type {Array<string>}
   * @memberof V1ResourceRule
   */
  verbs: Array<string>
}
