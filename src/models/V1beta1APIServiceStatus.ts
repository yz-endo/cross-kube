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
import V1beta1APIServiceCondition from './V1beta1APIServiceCondition'

/**
 * APIServiceStatus contains derived information about an API server
 * @export
 * @interface V1beta1APIServiceStatus
 */
export default interface V1beta1APIServiceStatus extends KubeObject {
  /**
   * Current service state of apiService.
   * @type {Array<V1beta1APIServiceCondition>}
   * @memberof V1beta1APIServiceStatus
   */
  conditions?: Array<V1beta1APIServiceCondition>
}
