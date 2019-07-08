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
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 * @export
 * @interface V1NonResourceAttributes
 */
export default interface V1NonResourceAttributes extends KubeObject {
  /**
   * Path is the URL path of the request
   * @type {string}
   * @memberof V1NonResourceAttributes
   */
  path?: string

  /**
   * Verb is the standard HTTP verb
   * @type {string}
   * @memberof V1NonResourceAttributes
   */
  verb?: string
}
