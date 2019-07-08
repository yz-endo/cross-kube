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
 * Represents a vSphere volume resource.
 * @export
 * @interface V1VsphereVirtualDiskVolumeSource
 */
export default interface V1VsphereVirtualDiskVolumeSource extends KubeObject {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof V1VsphereVirtualDiskVolumeSource
   */
  fsType?: string

  /**
   * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
   * @type {string}
   * @memberof V1VsphereVirtualDiskVolumeSource
   */
  storagePolicyID?: string

  /**
   * Storage Policy Based Management (SPBM) profile name.
   * @type {string}
   * @memberof V1VsphereVirtualDiskVolumeSource
   */
  storagePolicyName?: string

  /**
   * Path that identifies vSphere volume vmdk
   * @type {string}
   * @memberof V1VsphereVirtualDiskVolumeSource
   */
  volumePath: string
}
