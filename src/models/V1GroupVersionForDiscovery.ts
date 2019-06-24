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
 * GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
 * @export
 * @interface V1GroupVersionForDiscovery
 */
export default interface V1GroupVersionForDiscovery extends KubeObject {
  /**
   * groupVersion specifies the API group and version in the form \"group/version\"
   * @type {string}
   * @memberof V1GroupVersionForDiscovery
   */
  groupVersion: string

  /**
   * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
   * @type {string}
   * @memberof V1GroupVersionForDiscovery
   */
  version: string
}
