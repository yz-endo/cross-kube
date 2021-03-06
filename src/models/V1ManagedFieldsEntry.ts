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
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 * @export
 * @interface V1ManagedFieldsEntry
 */
export default interface V1ManagedFieldsEntry extends KubeObject {
  /**
   * APIVersion defines the version of this resource that this field set applies to. The format is \"group/version\" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
   * @type {string}
   * @memberof V1ManagedFieldsEntry
   */
  apiVersion?: string

  /**
   * Fields identifies a set of fields.
   * @type {object}
   * @memberof V1ManagedFieldsEntry
   */
  fields?: object

  /**
   * Manager is an identifier of the workflow managing these fields.
   * @type {string}
   * @memberof V1ManagedFieldsEntry
   */
  manager?: string

  /**
   * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \'Apply\' and \'Update\'.
   * @type {string}
   * @memberof V1ManagedFieldsEntry
   */
  operation?: string

  /**
   * Time is timestamp of when these fields were set. It should always be empty if Operation is \'Apply\'
   * @type {Date}
   * @memberof V1ManagedFieldsEntry
   */
  time?: Date
}
