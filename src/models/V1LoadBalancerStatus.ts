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
import V1LoadBalancerIngress from './V1LoadBalancerIngress'

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 * @export
 * @interface V1LoadBalancerStatus
 */
export default interface V1LoadBalancerStatus extends KubeObject {
  /**
   * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
   * @type {Array<V1LoadBalancerIngress>}
   * @memberof V1LoadBalancerStatus
   */
  ingress?: Array<V1LoadBalancerIngress>
}
