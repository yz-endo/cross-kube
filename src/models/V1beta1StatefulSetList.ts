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
import V1beta1StatefulSet from './V1beta1StatefulSet'

/**
 * StatefulSetList is a collection of StatefulSets.
 * @export
 * @interface V1beta1StatefulSetList
 */
export default interface V1beta1StatefulSetList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1StatefulSetList
   */
  apiVersion?: string

  /**
   *
   * @type {Array<V1beta1StatefulSet>}
   * @memberof V1beta1StatefulSetList
   */
  items: Array<V1beta1StatefulSet>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1StatefulSetList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1beta1StatefulSetList
   */
  metadata?: V1ListMeta
}
