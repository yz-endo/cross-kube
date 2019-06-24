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
import V1alpha1VolumeAttachmentSource from './V1alpha1VolumeAttachmentSource'

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 * @export
 * @interface V1alpha1VolumeAttachmentSpec
 */
export default interface V1alpha1VolumeAttachmentSpec extends KubeObject {
  /**
   * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
   * @type {string}
   * @memberof V1alpha1VolumeAttachmentSpec
   */
  attacher: string

  /**
   * The node that the volume should be attached to.
   * @type {string}
   * @memberof V1alpha1VolumeAttachmentSpec
   */
  nodeName: string

  /**
   *
   * @type {V1alpha1VolumeAttachmentSource}
   * @memberof V1alpha1VolumeAttachmentSpec
   */
  source: V1alpha1VolumeAttachmentSource
}
