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
import V1ObjectMeta from './V1ObjectMeta'
import V1beta1PodDisruptionBudgetSpec from './V1beta1PodDisruptionBudgetSpec'
import V1beta1PodDisruptionBudgetStatus from './V1beta1PodDisruptionBudgetStatus'

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 * @export
 * @interface V1beta1PodDisruptionBudget
 */
export default interface V1beta1PodDisruptionBudget extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1PodDisruptionBudget
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1PodDisruptionBudget
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1PodDisruptionBudget
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1beta1PodDisruptionBudgetSpec}
   * @memberof V1beta1PodDisruptionBudget
   */
  spec?: V1beta1PodDisruptionBudgetSpec

  /**
   *
   * @type {V1beta1PodDisruptionBudgetStatus}
   * @memberof V1beta1PodDisruptionBudget
   */
  status?: V1beta1PodDisruptionBudgetStatus
}
