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
import V1PodDNSConfigOption from './V1PodDNSConfigOption'

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 * @export
 * @interface V1PodDNSConfig
 */
export default interface V1PodDNSConfig extends KubeObject {
  /**
   * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
   * @type {Array<string>}
   * @memberof V1PodDNSConfig
   */
  nameservers?: Array<string>

  /**
   * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
   * @type {Array<V1PodDNSConfigOption>}
   * @memberof V1PodDNSConfig
   */
  options?: Array<V1PodDNSConfigOption>

  /**
   * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
   * @type {Array<string>}
   * @memberof V1PodDNSConfig
   */
  searches?: Array<string>
}
