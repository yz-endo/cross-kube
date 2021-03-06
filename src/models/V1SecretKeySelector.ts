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
 * SecretKeySelector selects a key of a Secret.
 * @export
 * @interface V1SecretKeySelector
 */
export default interface V1SecretKeySelector extends KubeObject {
  /**
   * The key of the secret to select from.  Must be a valid secret key.
   * @type {string}
   * @memberof V1SecretKeySelector
   */
  key: string

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof V1SecretKeySelector
   */
  name?: string

  /**
   * Specify whether the Secret or it\'s key must be defined
   * @type {boolean}
   * @memberof V1SecretKeySelector
   */
  optional?: boolean
}
