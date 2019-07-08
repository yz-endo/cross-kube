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
 * RoleRef contains information that points to the role being used
 * @export
 * @interface V1alpha1RoleRef
 */
export default interface V1alpha1RoleRef extends KubeObject {
  /**
   * APIGroup is the group for the resource being referenced
   * @type {string}
   * @memberof V1alpha1RoleRef
   */
  apiGroup: string

  /**
   * Kind is the type of resource being referenced
   * @type {string}
   * @memberof V1alpha1RoleRef
   */
  kind: string

  /**
   * Name is the name of resource being referenced
   * @type {string}
   * @memberof V1alpha1RoleRef
   */
  name: string
}
