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
import V1DaemonSet from './V1DaemonSet'
import V1ListMeta from './V1ListMeta'

/**
 * DaemonSetList is a collection of daemon sets.
 * @export
 * @interface V1DaemonSetList
 */
export default interface V1DaemonSetList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1DaemonSetList
   */
  apiVersion?: string

  /**
   * A list of daemon sets.
   * @type {Array<V1DaemonSet>}
   * @memberof V1DaemonSetList
   */
  items: Array<V1DaemonSet>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1DaemonSetList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1DaemonSetList
   */
  metadata?: V1ListMeta
}
