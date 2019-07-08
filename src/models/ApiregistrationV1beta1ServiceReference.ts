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
 * ServiceReference holds a reference to Service.legacy.k8s.io
 * @export
 * @interface ApiregistrationV1beta1ServiceReference
 */
export default interface ApiregistrationV1beta1ServiceReference extends KubeObject {
  /**
   * Name is the name of the service
   * @type {string}
   * @memberof ApiregistrationV1beta1ServiceReference
   */
  name?: string

  /**
   * Namespace is the namespace of the service
   * @type {string}
   * @memberof ApiregistrationV1beta1ServiceReference
   */
  namespace?: string
}
