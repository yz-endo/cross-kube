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
import V1APIServiceSpec from './V1APIServiceSpec'
import V1APIServiceStatus from './V1APIServiceStatus'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * APIService represents a server for a particular GroupVersion. Name must be \"version.group\".
 * @export
 * @interface V1APIService
 */
export default interface V1APIService extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1APIService
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1APIService
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1APIService
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1APIServiceSpec}
   * @memberof V1APIService
   */
  spec?: V1APIServiceSpec

  /**
   *
   * @type {V1APIServiceStatus}
   * @memberof V1APIService
   */
  status?: V1APIServiceStatus
}
