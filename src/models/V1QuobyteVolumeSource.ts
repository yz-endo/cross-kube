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
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 * @export
 * @interface V1QuobyteVolumeSource
 */
export default interface V1QuobyteVolumeSource extends KubeObject {
  /**
   * Group to map volume access to Default is no group
   * @type {string}
   * @memberof V1QuobyteVolumeSource
   */
  group?: string

  /**
   * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
   * @type {boolean}
   * @memberof V1QuobyteVolumeSource
   */
  readOnly?: boolean

  /**
   * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
   * @type {string}
   * @memberof V1QuobyteVolumeSource
   */
  registry: string

  /**
   * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
   * @type {string}
   * @memberof V1QuobyteVolumeSource
   */
  tenant?: string

  /**
   * User to map volume access to Defaults to serivceaccount user
   * @type {string}
   * @memberof V1QuobyteVolumeSource
   */
  user?: string

  /**
   * Volume is a string that references an already created Quobyte volume by name.
   * @type {string}
   * @memberof V1QuobyteVolumeSource
   */
  volume: string
}
