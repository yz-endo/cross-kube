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
 * Policy defines the configuration of how audit events are logged
 * @export
 * @interface V1alpha1Policy
 */
export default interface V1alpha1Policy extends KubeObject {
  /**
   * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
   * @type {string}
   * @memberof V1alpha1Policy
   */
  level: string

  /**
   * Stages is a list of stages for which events are created.
   * @type {Array<string>}
   * @memberof V1alpha1Policy
   */
  stages?: Array<string>
}
