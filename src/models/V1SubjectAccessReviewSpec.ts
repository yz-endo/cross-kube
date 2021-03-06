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
import V1NonResourceAttributes from './V1NonResourceAttributes'
import V1ResourceAttributes from './V1ResourceAttributes'

/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 * @export
 * @interface V1SubjectAccessReviewSpec
 */
export default interface V1SubjectAccessReviewSpec extends KubeObject {
  /**
   * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
   * @type {{ [key: string]: Array<string>; }}
   * @memberof V1SubjectAccessReviewSpec
   */
  extra?: { [key: string]: Array<string> }

  /**
   * Groups is the groups you\'re testing for.
   * @type {Array<string>}
   * @memberof V1SubjectAccessReviewSpec
   */
  groups?: Array<string>

  /**
   *
   * @type {V1NonResourceAttributes}
   * @memberof V1SubjectAccessReviewSpec
   */
  nonResourceAttributes?: V1NonResourceAttributes

  /**
   *
   * @type {V1ResourceAttributes}
   * @memberof V1SubjectAccessReviewSpec
   */
  resourceAttributes?: V1ResourceAttributes

  /**
   * UID information about the requesting user.
   * @type {string}
   * @memberof V1SubjectAccessReviewSpec
   */
  uid?: string

  /**
   * User is the user you\'re testing for. If you specify \"User\" but not \"Groups\", then is it interpreted as \"What if User were not a member of any groups
   * @type {string}
   * @memberof V1SubjectAccessReviewSpec
   */
  user?: string
}
