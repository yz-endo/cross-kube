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
import V1ListMeta from './V1ListMeta'
import V1alpha1VolumeAttachment from './V1alpha1VolumeAttachment'

/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 * @export
 * @interface V1alpha1VolumeAttachmentList
 */
export default interface V1alpha1VolumeAttachmentList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1alpha1VolumeAttachmentList
   */
  apiVersion?: string

  /**
   * Items is the list of VolumeAttachments
   * @type {Array<V1alpha1VolumeAttachment>}
   * @memberof V1alpha1VolumeAttachmentList
   */
  items: Array<V1alpha1VolumeAttachment>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1alpha1VolumeAttachmentList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof V1alpha1VolumeAttachmentList
   */
  metadata?: V1ListMeta
}
