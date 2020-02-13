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
import V1NodeConfigSource from './V1NodeConfigSource'
import V1Taint from './V1Taint'

/**
 * NodeSpec describes the attributes that a node is created with.
 * @export
 * @interface V1NodeSpec
 */
export default interface V1NodeSpec extends KubeObject {
  /**
   *
   * @type {V1NodeConfigSource}
   * @memberof V1NodeSpec
   */
  configSource?: V1NodeConfigSource

  /**
   * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
   * @type {string}
   * @memberof V1NodeSpec
   */
  externalID?: string

  /**
   * PodCIDR represents the pod IP range assigned to the node.
   * @type {string}
   * @memberof V1NodeSpec
   */
  podCIDR?: string

  /**
   * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
   * @type {string}
   * @memberof V1NodeSpec
   */
  providerID?: string

  /**
   * If specified, the node\'s taints.
   * @type {Array<V1Taint>}
   * @memberof V1NodeSpec
   */
  taints?: Array<V1Taint>

  /**
   * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
   * @type {boolean}
   * @memberof V1NodeSpec
   */
  unschedulable?: boolean
}
