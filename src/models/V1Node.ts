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
import V1NodeSpec from './V1NodeSpec'
import V1NodeStatus from './V1NodeStatus'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 * @export
 * @interface V1Node
 */
export default interface V1Node extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1Node
   */
  apiVersion?: string

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1Node
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1Node
   */
  metadata?: V1ObjectMeta

  /**
   *
   * @type {V1NodeSpec}
   * @memberof V1Node
   */
  spec?: V1NodeSpec

  /**
   *
   * @type {V1NodeStatus}
   * @memberof V1Node
   */
  status?: V1NodeStatus
}
