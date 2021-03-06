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
import V1AWSElasticBlockStoreVolumeSource from './V1AWSElasticBlockStoreVolumeSource'
import V1AzureDiskVolumeSource from './V1AzureDiskVolumeSource'
import V1AzureFileVolumeSource from './V1AzureFileVolumeSource'
import V1CSIVolumeSource from './V1CSIVolumeSource'
import V1CephFSVolumeSource from './V1CephFSVolumeSource'
import V1CinderVolumeSource from './V1CinderVolumeSource'
import V1ConfigMapVolumeSource from './V1ConfigMapVolumeSource'
import V1DownwardAPIVolumeSource from './V1DownwardAPIVolumeSource'
import V1EmptyDirVolumeSource from './V1EmptyDirVolumeSource'
import V1FCVolumeSource from './V1FCVolumeSource'
import V1FlexVolumeSource from './V1FlexVolumeSource'
import V1FlockerVolumeSource from './V1FlockerVolumeSource'
import V1GCEPersistentDiskVolumeSource from './V1GCEPersistentDiskVolumeSource'
import V1GitRepoVolumeSource from './V1GitRepoVolumeSource'
import V1GlusterfsVolumeSource from './V1GlusterfsVolumeSource'
import V1HostPathVolumeSource from './V1HostPathVolumeSource'
import V1ISCSIVolumeSource from './V1ISCSIVolumeSource'
import V1NFSVolumeSource from './V1NFSVolumeSource'
import V1PersistentVolumeClaimVolumeSource from './V1PersistentVolumeClaimVolumeSource'
import V1PhotonPersistentDiskVolumeSource from './V1PhotonPersistentDiskVolumeSource'
import V1PortworxVolumeSource from './V1PortworxVolumeSource'
import V1ProjectedVolumeSource from './V1ProjectedVolumeSource'
import V1QuobyteVolumeSource from './V1QuobyteVolumeSource'
import V1RBDVolumeSource from './V1RBDVolumeSource'
import V1ScaleIOVolumeSource from './V1ScaleIOVolumeSource'
import V1SecretVolumeSource from './V1SecretVolumeSource'
import V1StorageOSVolumeSource from './V1StorageOSVolumeSource'
import V1VsphereVirtualDiskVolumeSource from './V1VsphereVirtualDiskVolumeSource'

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 * @export
 * @interface V1Volume
 */
export default interface V1Volume extends KubeObject {
  /**
   *
   * @type {V1AWSElasticBlockStoreVolumeSource}
   * @memberof V1Volume
   */
  awsElasticBlockStore?: V1AWSElasticBlockStoreVolumeSource

  /**
   *
   * @type {V1AzureDiskVolumeSource}
   * @memberof V1Volume
   */
  azureDisk?: V1AzureDiskVolumeSource

  /**
   *
   * @type {V1AzureFileVolumeSource}
   * @memberof V1Volume
   */
  azureFile?: V1AzureFileVolumeSource

  /**
   *
   * @type {V1CephFSVolumeSource}
   * @memberof V1Volume
   */
  cephfs?: V1CephFSVolumeSource

  /**
   *
   * @type {V1CinderVolumeSource}
   * @memberof V1Volume
   */
  cinder?: V1CinderVolumeSource

  /**
   *
   * @type {V1ConfigMapVolumeSource}
   * @memberof V1Volume
   */
  configMap?: V1ConfigMapVolumeSource

  /**
   *
   * @type {V1CSIVolumeSource}
   * @memberof V1Volume
   */
  csi?: V1CSIVolumeSource

  /**
   *
   * @type {V1DownwardAPIVolumeSource}
   * @memberof V1Volume
   */
  downwardAPI?: V1DownwardAPIVolumeSource

  /**
   *
   * @type {V1EmptyDirVolumeSource}
   * @memberof V1Volume
   */
  emptyDir?: V1EmptyDirVolumeSource

  /**
   *
   * @type {V1FCVolumeSource}
   * @memberof V1Volume
   */
  fc?: V1FCVolumeSource

  /**
   *
   * @type {V1FlexVolumeSource}
   * @memberof V1Volume
   */
  flexVolume?: V1FlexVolumeSource

  /**
   *
   * @type {V1FlockerVolumeSource}
   * @memberof V1Volume
   */
  flocker?: V1FlockerVolumeSource

  /**
   *
   * @type {V1GCEPersistentDiskVolumeSource}
   * @memberof V1Volume
   */
  gcePersistentDisk?: V1GCEPersistentDiskVolumeSource

  /**
   *
   * @type {V1GitRepoVolumeSource}
   * @memberof V1Volume
   */
  gitRepo?: V1GitRepoVolumeSource

  /**
   *
   * @type {V1GlusterfsVolumeSource}
   * @memberof V1Volume
   */
  glusterfs?: V1GlusterfsVolumeSource

  /**
   *
   * @type {V1HostPathVolumeSource}
   * @memberof V1Volume
   */
  hostPath?: V1HostPathVolumeSource

  /**
   *
   * @type {V1ISCSIVolumeSource}
   * @memberof V1Volume
   */
  iscsi?: V1ISCSIVolumeSource

  /**
   * Volume\'s name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @type {string}
   * @memberof V1Volume
   */
  name: string

  /**
   *
   * @type {V1NFSVolumeSource}
   * @memberof V1Volume
   */
  nfs?: V1NFSVolumeSource

  /**
   *
   * @type {V1PersistentVolumeClaimVolumeSource}
   * @memberof V1Volume
   */
  persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource

  /**
   *
   * @type {V1PhotonPersistentDiskVolumeSource}
   * @memberof V1Volume
   */
  photonPersistentDisk?: V1PhotonPersistentDiskVolumeSource

  /**
   *
   * @type {V1PortworxVolumeSource}
   * @memberof V1Volume
   */
  portworxVolume?: V1PortworxVolumeSource

  /**
   *
   * @type {V1ProjectedVolumeSource}
   * @memberof V1Volume
   */
  projected?: V1ProjectedVolumeSource

  /**
   *
   * @type {V1QuobyteVolumeSource}
   * @memberof V1Volume
   */
  quobyte?: V1QuobyteVolumeSource

  /**
   *
   * @type {V1RBDVolumeSource}
   * @memberof V1Volume
   */
  rbd?: V1RBDVolumeSource

  /**
   *
   * @type {V1ScaleIOVolumeSource}
   * @memberof V1Volume
   */
  scaleIO?: V1ScaleIOVolumeSource

  /**
   *
   * @type {V1SecretVolumeSource}
   * @memberof V1Volume
   */
  secret?: V1SecretVolumeSource

  /**
   *
   * @type {V1StorageOSVolumeSource}
   * @memberof V1Volume
   */
  storageos?: V1StorageOSVolumeSource

  /**
   *
   * @type {V1VsphereVirtualDiskVolumeSource}
   * @memberof V1Volume
   */
  vsphereVolume?: V1VsphereVirtualDiskVolumeSource
}
