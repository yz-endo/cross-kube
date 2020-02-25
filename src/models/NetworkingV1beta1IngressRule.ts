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
import NetworkingV1beta1HTTPIngressRuleValue from './NetworkingV1beta1HTTPIngressRuleValue'

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 * @export
 * @interface NetworkingV1beta1IngressRule
 */
export default interface NetworkingV1beta1IngressRule extends KubeObject {
  /**
   * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the \"host\" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the    IP in the Spec of the parent Ingress. 2. The `:` delimiter is not respected because ports are not allowed.    Currently the port of an Ingress is implicitly :80 for http and    :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
   * @type {string}
   * @memberof NetworkingV1beta1IngressRule
   */
  host?: string

  /**
   *
   * @type {NetworkingV1beta1HTTPIngressRuleValue}
   * @memberof NetworkingV1beta1IngressRule
   */
  http?: NetworkingV1beta1HTTPIngressRuleValue
}
