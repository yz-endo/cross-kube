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
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 * @export
 * @interface V1beta1CertificateSigningRequestSpec
 */
export default interface V1beta1CertificateSigningRequestSpec extends KubeObject {
  /**
   * Extra information about the requesting user. See user.Info interface for details.
   * @type {{ [key: string]: Array<string>; }}
   * @memberof V1beta1CertificateSigningRequestSpec
   */
  extra?: { [key: string]: Array<string> }

  /**
   * Group information about the requesting user. See user.Info interface for details.
   * @type {Array<string>}
   * @memberof V1beta1CertificateSigningRequestSpec
   */
  groups?: Array<string>

  /**
   * Base64-encoded PKCS#10 CSR data
   * @type {string}
   * @memberof V1beta1CertificateSigningRequestSpec
   */
  request: string

  /**
   * UID information about the requesting user. See user.Info interface for details.
   * @type {string}
   * @memberof V1beta1CertificateSigningRequestSpec
   */
  uid?: string

  /**
   * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
   * @type {Array<string>}
   * @memberof V1beta1CertificateSigningRequestSpec
   */
  usages?: Array<string>

  /**
   * Information about the requesting user. See user.Info interface for details.
   * @type {string}
   * @memberof V1beta1CertificateSigningRequestSpec
   */
  username?: string
}
