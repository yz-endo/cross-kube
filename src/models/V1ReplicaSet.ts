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
import V1ReplicaSetSpec from './V1ReplicaSetSpec'
import V1ReplicaSetStatus from './V1ReplicaSetStatus'

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @export
 * @interface V1ReplicaSet
 */
export default interface V1ReplicaSet extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1ReplicaSet
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1ReplicaSet
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1ReplicaSet
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1ReplicaSetSpec}
   * @memberof V1ReplicaSet
   */
  spec?: V1ReplicaSetSpec

  /**
   *
   * @type {V1ReplicaSetStatus}
   * @memberof V1ReplicaSet
   */
  status?: V1ReplicaSetStatus
}
