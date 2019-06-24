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
import NetworkingV1beta1HTTPIngressPath from './NetworkingV1beta1HTTPIngressPath'

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last \'/\' and before the first \'?\' or \'#\'.
 * @export
 * @interface NetworkingV1beta1HTTPIngressRuleValue
 */
export default interface NetworkingV1beta1HTTPIngressRuleValue extends KubeObject {
  /**
   * A collection of paths that map requests to backends.
   * @type {Array<NetworkingV1beta1HTTPIngressPath>}
   * @memberof NetworkingV1beta1HTTPIngressRuleValue
   */
  paths: Array<NetworkingV1beta1HTTPIngressPath>
}
