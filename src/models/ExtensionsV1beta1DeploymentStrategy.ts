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
import ExtensionsV1beta1RollingUpdateDeployment from './ExtensionsV1beta1RollingUpdateDeployment'

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 * @export
 * @interface ExtensionsV1beta1DeploymentStrategy
 */
export default interface ExtensionsV1beta1DeploymentStrategy extends KubeObject {
  /**
   *
   * @type {ExtensionsV1beta1RollingUpdateDeployment}
   * @memberof ExtensionsV1beta1DeploymentStrategy
   */
  rollingUpdate?: ExtensionsV1beta1RollingUpdateDeployment

  /**
   * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
   * @type {string}
   * @memberof ExtensionsV1beta1DeploymentStrategy
   */
  type?: string
}
