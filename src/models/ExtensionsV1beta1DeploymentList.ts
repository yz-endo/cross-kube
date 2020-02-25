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
import ExtensionsV1beta1Deployment from './ExtensionsV1beta1Deployment'
import V1ListMeta from './V1ListMeta'

/**
 * DeploymentList is a list of Deployments.
 * @export
 * @interface ExtensionsV1beta1DeploymentList
 */
export default interface ExtensionsV1beta1DeploymentList extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof ExtensionsV1beta1DeploymentList
   */
  apiVersion?: string

  /**
   * Items is the list of Deployments.
   * @type {Array<ExtensionsV1beta1Deployment>}
   * @memberof ExtensionsV1beta1DeploymentList
   */
  items: Array<ExtensionsV1beta1Deployment>

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof ExtensionsV1beta1DeploymentList
   */
  kind?: string

  /**
   *
   * @type {V1ListMeta}
   * @memberof ExtensionsV1beta1DeploymentList
   */
  metadata?: V1ListMeta
}
