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

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 * @export
 * @interface V1PortworxVolumeSource
 */
export default interface V1PortworxVolumeSource extends KubeObject {
  /**
   * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\". Implicitly inferred to be \"ext4\" if unspecified.
   * @type {string}
   * @memberof V1PortworxVolumeSource
   */
  fsType?: string

  /**
   * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof V1PortworxVolumeSource
   */
  readOnly?: boolean

  /**
   * VolumeID uniquely identifies a Portworx volume
   * @type {string}
   * @memberof V1PortworxVolumeSource
   */
  volumeID: string
}
