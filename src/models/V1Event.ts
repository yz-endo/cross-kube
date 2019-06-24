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
import V1EventSeries from './V1EventSeries'
import V1EventSource from './V1EventSource'
import V1ObjectMeta from './V1ObjectMeta'
import V1ObjectReference from './V1ObjectReference'

/**
 * Event is a report of an event somewhere in the cluster.
 * @export
 * @interface V1Event
 */
export default interface V1Event extends KubeObject {
  /**
   * What action was taken/failed regarding to the Regarding object.
   * @type {string}
   * @memberof V1Event
   */
  action?: string

  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1Event
   */
  apiVersion?: string

  /**
   * The number of times this event has occurred.
   * @type {number}
   * @memberof V1Event
   */
  count?: number

  /**
   * Time when this Event was first observed.
   * @type {Date}
   * @memberof V1Event
   */
  eventTime?: Date

  /**
   * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
   * @type {Date}
   * @memberof V1Event
   */
  firstTimestamp?: Date

  /**
   *
   * @type {V1ObjectReference}
   * @memberof V1Event
   */
  involvedObject: V1ObjectReference

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1Event
   */
  kind?: string

  /**
   * The time at which the most recent occurrence of this event was recorded.
   * @type {Date}
   * @memberof V1Event
   */
  lastTimestamp?: Date

  /**
   * A human-readable description of the status of this operation.
   * @type {string}
   * @memberof V1Event
   */
  message?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1Event
   */
  metadata: V1ObjectMeta

  /**
   * This should be a short, machine understandable string that gives the reason for the transition into the object\'s current status.
   * @type {string}
   * @memberof V1Event
   */
  reason?: string

  /**
   *
   * @type {V1ObjectReference}
   * @memberof V1Event
   */
  related?: V1ObjectReference

  /**
   * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
   * @type {string}
   * @memberof V1Event
   */
  reportingComponent?: string

  /**
   * ID of the controller instance, e.g. `kubelet-xyzf`.
   * @type {string}
   * @memberof V1Event
   */
  reportingInstance?: string

  /**
   *
   * @type {V1EventSeries}
   * @memberof V1Event
   */
  series?: V1EventSeries

  /**
   *
   * @type {V1EventSource}
   * @memberof V1Event
   */
  source?: V1EventSource

  /**
   * Type of this event (Normal, Warning), new types could be added in the future
   * @type {string}
   * @memberof V1Event
   */
  type?: string
}
