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
import V1PersistentVolumeClaimCondition from './V1PersistentVolumeClaimCondition'

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 * @export
 * @interface V1PersistentVolumeClaimStatus
 */
export default interface V1PersistentVolumeClaimStatus extends KubeObject {
  /**
   * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
   * @type {Array<string>}
   * @memberof V1PersistentVolumeClaimStatus
   */
  accessModes?: Array<string>

  /**
   * Represents the actual resources of the underlying volume.
   * @type {{ [key: string]: string; }}
   * @memberof V1PersistentVolumeClaimStatus
   */
  capacity?: { [key: string]: string }

  /**
   * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to \'ResizeStarted\'.
   * @type {Array<V1PersistentVolumeClaimCondition>}
   * @memberof V1PersistentVolumeClaimStatus
   */
  conditions?: Array<V1PersistentVolumeClaimCondition>

  /**
   * Phase represents the current phase of PersistentVolumeClaim.
   * @type {string}
   * @memberof V1PersistentVolumeClaimStatus
   */
  phase?: string
}
