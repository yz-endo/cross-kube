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
import V1ListMeta from './V1ListMeta'
import V1ReplicationController from './V1ReplicationController'

/**
 * ReplicationControllerList is a collection of replication controllers.
 * @export
 * @interface V1ReplicationControllerList
 */
export default interface V1ReplicationControllerList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1ReplicationControllerList
   */
  apiVersion?: string

  /**
   * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
   * @type {Array<V1ReplicationController>}
   * @memberof V1ReplicationControllerList
   */
  items: Array<V1ReplicationController>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1ReplicationControllerList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1ReplicationControllerList
   */
  metadata?: V1ListMeta
}
