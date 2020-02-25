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
import V1ConfigMapProjection from './V1ConfigMapProjection'
import V1DownwardAPIProjection from './V1DownwardAPIProjection'
import V1SecretProjection from './V1SecretProjection'
import V1ServiceAccountTokenProjection from './V1ServiceAccountTokenProjection'

/**
 * Projection that may be projected along with other supported volume types
 * @export
 * @interface V1VolumeProjection
 */
export default interface V1VolumeProjection extends KubeObject {
  /**
   *
   * @type {V1ConfigMapProjection}
   * @memberof V1VolumeProjection
   */
  configMap?: V1ConfigMapProjection

  /**
   *
   * @type {V1DownwardAPIProjection}
   * @memberof V1VolumeProjection
   */
  downwardAPI?: V1DownwardAPIProjection

  /**
   *
   * @type {V1SecretProjection}
   * @memberof V1VolumeProjection
   */
  secret?: V1SecretProjection

  /**
   *
   * @type {V1ServiceAccountTokenProjection}
   * @memberof V1VolumeProjection
   */
  serviceAccountToken?: V1ServiceAccountTokenProjection
}
