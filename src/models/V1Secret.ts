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
import V1ObjectMeta from './V1ObjectMeta'

/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 * @export
 * @interface V1Secret
 */
export default interface V1Secret extends KubeObject {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
   * @type {string}
   * @memberof V1Secret
   */
  apiVersion?: string

  /**
   * Data contains the secret data. Each key must consist of alphanumeric characters, \'-\', \'_\' or \'.\'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
   * @type {{ [key: string]: string; }}
   * @memberof V1Secret
   */
  data?: { [key: string]: string }

  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1Secret
   */
  kind?: string

  /**
   *
   * @type {V1ObjectMeta}
   * @memberof V1Secret
   */
  metadata?: V1ObjectMeta

  /**
   * stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API.
   * @type {{ [key: string]: string; }}
   * @memberof V1Secret
   */
  stringData?: { [key: string]: string }

  /**
   * Used to facilitate programmatic handling of secret data.
   * @type {string}
   * @memberof V1Secret
   */
  type?: string
}
