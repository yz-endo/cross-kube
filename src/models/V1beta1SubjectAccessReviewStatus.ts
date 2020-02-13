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
 * SubjectAccessReviewStatus
 * @export
 * @interface V1beta1SubjectAccessReviewStatus
 */
export default interface V1beta1SubjectAccessReviewStatus extends KubeObject {
  /**
   * Allowed is required. True if the action would be allowed, false otherwise.
   * @type {boolean}
   * @memberof V1beta1SubjectAccessReviewStatus
   */
  allowed: boolean

  /**
   * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
   * @type {boolean}
   * @memberof V1beta1SubjectAccessReviewStatus
   */
  denied?: boolean

  /**
   * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
   * @type {string}
   * @memberof V1beta1SubjectAccessReviewStatus
   */
  evaluationError?: string

  /**
   * Reason is optional.  It indicates why a request was allowed or denied.
   * @type {string}
   * @memberof V1beta1SubjectAccessReviewStatus
   */
  reason?: string
}
