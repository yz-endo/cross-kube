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
import V1LocalObjectReference from './V1LocalObjectReference'

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 * @export
 * @interface V1CinderVolumeSource
 */
export default interface V1CinderVolumeSource extends KubeObject {
  /**
   * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @type {string}
   * @memberof V1CinderVolumeSource
   */
  fsType?: string

  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @type {boolean}
   * @memberof V1CinderVolumeSource
   */
  readOnly?: boolean

  /**
   *
   * @type {V1LocalObjectReference}
   * @memberof V1CinderVolumeSource
   */
  secretRef?: V1LocalObjectReference

  /**
   * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
   * @type {string}
   * @memberof V1CinderVolumeSource
   */
  volumeID: string
}
