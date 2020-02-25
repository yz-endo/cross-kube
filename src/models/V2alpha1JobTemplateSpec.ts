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
import V1JobSpec from './V1JobSpec'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 * @export
 * @interface V2alpha1JobTemplateSpec
 */
export default interface V2alpha1JobTemplateSpec extends KubeObject {
  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V2alpha1JobTemplateSpec
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1JobSpec}
   * @memberof V2alpha1JobTemplateSpec
   */
  spec?: V1JobSpec
}
