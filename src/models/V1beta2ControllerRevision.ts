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
import RuntimeRawExtension from './RuntimeRawExtension'
import V1ObjectMeta from './V1ObjectMeta'

/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 * @export
 * @interface V1beta2ControllerRevision
 */
export default interface V1beta2ControllerRevision extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta2ControllerRevision
   */
  apiVersion?: string

  /**
   *
   * @type {RuntimeRawExtension}
   * @memberof V1beta2ControllerRevision
   */
  data?: RuntimeRawExtension

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta2ControllerRevision
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta2ControllerRevision
   */
  metadata?: V1ObjectMeta

  /**
   * Revision indicates the revision of the state represented by Data.
   * @type {number}
   * @memberof V1beta2ControllerRevision
   */
  revision: number
}
