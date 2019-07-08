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
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.  The contents of the target ConfigMap\'s Data field will represent the key-value pairs as environment variables.
 * @export
 * @interface V1ConfigMapEnvSource
 */
export default interface V1ConfigMapEnvSource extends KubeObject {
  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof V1ConfigMapEnvSource
   */
  name?: string

  /**
   * Specify whether the ConfigMap must be defined
   * @type {boolean}
   * @memberof V1ConfigMapEnvSource
   */
  optional?: boolean
}
