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
import V1LocalObjectReference from './V1LocalObjectReference'

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1CephFSVolumeSource
 */
export default interface V1CephFSVolumeSource extends KubeObject {
  /**
   * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {Array<string>}
   * @memberof V1CephFSVolumeSource
   */
  monitors: Array<string>

  /**
   * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
   * @type {string}
   * @memberof V1CephFSVolumeSource
   */
  path?: string

  /**
   * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {boolean}
   * @memberof V1CephFSVolumeSource
   */
  readOnly?: boolean

  /**
   * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {string}
   * @memberof V1CephFSVolumeSource
   */
  secretFile?: string

  /**
   *
   * @type {V1LocalObjectReference}
   * @memberof V1CephFSVolumeSource
   */
  secretRef?: V1LocalObjectReference

  /**
   * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
   * @type {string}
   * @memberof V1CephFSVolumeSource
   */
  user?: string
}
