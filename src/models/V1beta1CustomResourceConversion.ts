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
import ApiextensionsV1beta1WebhookClientConfig from './ApiextensionsV1beta1WebhookClientConfig'

/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 * @export
 * @interface V1beta1CustomResourceConversion
 */
export default interface V1beta1CustomResourceConversion extends KubeObject {
  /**
   * ConversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, conversion will fail for this object. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Default to `[\'v1beta1\']`.
   * @type {Array<string>}
   * @memberof V1beta1CustomResourceConversion
   */
  conversionReviewVersions?: Array<string>

  /**
   * `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information is needed for this option.
   * @type {string}
   * @memberof V1beta1CustomResourceConversion
   */
  strategy: string

  /**
   *
   * @type {ApiextensionsV1beta1WebhookClientConfig}
   * @memberof V1beta1CustomResourceConversion
   */
  webhookClientConfig?: ApiextensionsV1beta1WebhookClientConfig
}
