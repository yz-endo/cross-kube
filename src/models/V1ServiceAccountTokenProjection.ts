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

/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 * @export
 * @interface V1ServiceAccountTokenProjection
 */
export default interface V1ServiceAccountTokenProjection extends KubeObject {
  /**
   * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
   * @type {string}
   * @memberof V1ServiceAccountTokenProjection
   */
  audience?: string

  /**
   * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
   * @type {number}
   * @memberof V1ServiceAccountTokenProjection
   */
  expirationSeconds?: number

  /**
   * Path is the path relative to the mount point of the file to project the token into.
   * @type {string}
   * @memberof V1ServiceAccountTokenProjection
   */
  path: string
}
