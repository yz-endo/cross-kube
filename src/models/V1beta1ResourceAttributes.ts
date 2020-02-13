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
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 * @export
 * @interface V1beta1ResourceAttributes
 */
export default interface V1beta1ResourceAttributes extends KubeObject {
  /**
   * Group is the API Group of the Resource.  \"*\" means all.
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  group?: string

  /**
   * Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  name?: string

  /**
   * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  namespace?: string

  /**
   * Resource is one of the existing resource types.  \"*\" means all.
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  resource?: string

  /**
   * Subresource is one of the existing resource types.  \"\" means none.
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  subresource?: string

  /**
   * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  verb?: string

  /**
   * Version is the API Version of the Resource.  \"*\" means all.
   * @type {string}
   * @memberof V1beta1ResourceAttributes
   */
  version?: string
}
