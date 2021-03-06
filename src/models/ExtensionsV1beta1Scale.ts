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
import ExtensionsV1beta1ScaleSpec from './ExtensionsV1beta1ScaleSpec'
import ExtensionsV1beta1ScaleStatus from './ExtensionsV1beta1ScaleStatus'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * represents a scaling request for a resource.
 * @export
 * @interface ExtensionsV1beta1Scale
 */
export default interface ExtensionsV1beta1Scale extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof ExtensionsV1beta1Scale
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof ExtensionsV1beta1Scale
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof ExtensionsV1beta1Scale
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {ExtensionsV1beta1ScaleSpec}
   * @memberof ExtensionsV1beta1Scale
   */
  spec?: ExtensionsV1beta1ScaleSpec

  /**
   *
   * @type {ExtensionsV1beta1ScaleStatus}
   * @memberof ExtensionsV1beta1Scale
   */
  status?: ExtensionsV1beta1ScaleStatus
}
