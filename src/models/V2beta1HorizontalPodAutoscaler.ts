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
import V1ObjectMeta from './V1ObjectMeta'
import V2beta1HorizontalPodAutoscalerSpec from './V2beta1HorizontalPodAutoscalerSpec'
import V2beta1HorizontalPodAutoscalerStatus from './V2beta1HorizontalPodAutoscalerStatus'

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 * @export
 * @interface V2beta1HorizontalPodAutoscaler
 */
export default interface V2beta1HorizontalPodAutoscaler extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V2beta1HorizontalPodAutoscaler
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V2beta1HorizontalPodAutoscaler
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V2beta1HorizontalPodAutoscaler
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V2beta1HorizontalPodAutoscalerSpec}
   * @memberof V2beta1HorizontalPodAutoscaler
   */
  spec?: V2beta1HorizontalPodAutoscalerSpec

  /**
   *
   * @type {V2beta1HorizontalPodAutoscalerStatus}
   * @memberof V2beta1HorizontalPodAutoscaler
   */
  status?: V2beta1HorizontalPodAutoscalerStatus
}
