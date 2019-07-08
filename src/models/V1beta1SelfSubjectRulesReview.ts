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
import V1ObjectMeta from './V1ObjectMeta'
import V1beta1SelfSubjectRulesReviewSpec from './V1beta1SelfSubjectRulesReviewSpec'
import V1beta1SubjectRulesReviewStatus from './V1beta1SubjectRulesReviewStatus'

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server\'s authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 * @export
 * @interface V1beta1SelfSubjectRulesReview
 */
export default interface V1beta1SelfSubjectRulesReview extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1SelfSubjectRulesReview
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1SelfSubjectRulesReview
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1SelfSubjectRulesReview
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1beta1SelfSubjectRulesReviewSpec}
   * @memberof V1beta1SelfSubjectRulesReview
   */
  spec: V1beta1SelfSubjectRulesReviewSpec

  /**
   *
   * @type {V1beta1SubjectRulesReviewStatus}
   * @memberof V1beta1SelfSubjectRulesReview
   */
  status?: V1beta1SubjectRulesReviewStatus
}
