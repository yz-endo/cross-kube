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
import V1ObjectReference from './V1ObjectReference'

/**
 * EndpointAddress is a tuple that describes single IP address.
 * @export
 * @interface V1EndpointAddress
 */
export default interface V1EndpointAddress extends KubeObject {
  /**
   * The Hostname of this endpoint
   * @type {string}
   * @memberof V1EndpointAddress
   */
  hostname?: string

  /**
   * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
   * @type {string}
   * @memberof V1EndpointAddress
   */
  ip: string

  /**
   * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
   * @type {string}
   * @memberof V1EndpointAddress
   */
  nodeName?: string

  /**
   *
   * @type {V1ObjectReference}
   * @memberof V1EndpointAddress
   */
  targetRef?: V1ObjectReference
}
