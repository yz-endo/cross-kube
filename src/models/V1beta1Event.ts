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
import V1EventSource from './V1EventSource'
import V1ObjectMeta from './V1ObjectMeta'
import V1ObjectReference from './V1ObjectReference'
import V1beta1EventSeries from './V1beta1EventSeries'

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 * @export
 * @interface V1beta1Event
 */
export default interface V1beta1Event extends KubeObject {
  /**
   * What action was taken/failed regarding to the regarding object.
   * @type {string}
   * @memberof V1beta1Event
   */
  action?: string

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1Event
   */
  apiVersion?: string

  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   * @type {number}
   * @memberof V1beta1Event
   */
  deprecatedCount?: number

  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   * @type {Date}
   * @memberof V1beta1Event
   */
  deprecatedFirstTimestamp?: Date

  /**
   * Deprecated field assuring backward compatibility with core.v1 Event type
   * @type {Date}
   * @memberof V1beta1Event
   */
  deprecatedLastTimestamp?: Date

  /**
   *
   * @type {V1EventSource}
   * @memberof V1beta1Event
   */
  deprecatedSource?: V1EventSource

  /**
   * Required. Time when this Event was first observed.
   * @type {Date}
   * @memberof V1beta1Event
   */
  eventTime: Date

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1Event
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1beta1Event
   */
  metadata?: V1ObjectMeta

  /**
   * Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
   * @type {string}
   * @memberof V1beta1Event
   */
  note?: string

  /**
   * Why the action was taken.
   * @type {string}
   * @memberof V1beta1Event
   */
  reason?: string

  /**
   *
   * @type {V1ObjectReference}
   * @memberof V1beta1Event
   */
  regarding?: V1ObjectReference

  /**
   *
   * @type {V1ObjectReference}
   * @memberof V1beta1Event
   */
  related?: V1ObjectReference

  /**
   * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
   * @type {string}
   * @memberof V1beta1Event
   */
  reportingController?: string

  /**
   * ID of the controller instance, e.g. `kubelet-xyzf`.
   * @type {string}
   * @memberof V1beta1Event
   */
  reportingInstance?: string

  /**
   *
   * @type {V1beta1EventSeries}
   * @memberof V1beta1Event
   */
  series?: V1beta1EventSeries

  /**
   * Type of this event (Normal, Warning), new types could be added in the future.
   * @type {string}
   * @memberof V1beta1Event
   */
  type?: string
}
