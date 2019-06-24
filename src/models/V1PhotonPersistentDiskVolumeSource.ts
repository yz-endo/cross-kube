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

/**
 * Represents a Photon Controller persistent disk resource.
 * @export
 * @interface V1PhotonPersistentDiskVolumeSource
 */
export default interface V1PhotonPersistentDiskVolumeSource extends KubeObject {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof V1PhotonPersistentDiskVolumeSource
   */
  fsType?: string

  /**
   * ID that identifies Photon Controller persistent disk
   * @type {string}
   * @memberof V1PhotonPersistentDiskVolumeSource
   */
  pdID: string
}
