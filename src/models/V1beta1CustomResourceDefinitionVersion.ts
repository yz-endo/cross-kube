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
import V1beta1CustomResourceColumnDefinition from './V1beta1CustomResourceColumnDefinition'
import V1beta1CustomResourceSubresources from './V1beta1CustomResourceSubresources'
import V1beta1CustomResourceValidation from './V1beta1CustomResourceValidation'

/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 * @export
 * @interface V1beta1CustomResourceDefinitionVersion
 */
export default interface V1beta1CustomResourceDefinitionVersion extends KubeObject {
  /**
   * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null
   * @type {Array<V1beta1CustomResourceColumnDefinition>}
   * @memberof V1beta1CustomResourceDefinitionVersion
   */
  additionalPrinterColumns?: Array<V1beta1CustomResourceColumnDefinition>

  /**
   * Name is the version name, e.g. “v1”, “v2beta1”, etc.
   * @type {string}
   * @memberof V1beta1CustomResourceDefinitionVersion
   */
  name: string

  /**
   *
   * @type {V1beta1CustomResourceValidation}
   * @memberof V1beta1CustomResourceDefinitionVersion
   */
  schema?: V1beta1CustomResourceValidation

  /**
   * Served is a flag enabling/disabling this version from being served via REST APIs
   * @type {boolean}
   * @memberof V1beta1CustomResourceDefinitionVersion
   */
  served: boolean

  /**
   * Storage flags the version as storage version. There must be exactly one flagged as storage version.
   * @type {boolean}
   * @memberof V1beta1CustomResourceDefinitionVersion
   */
  storage: boolean

  /**
   *
   * @type {V1beta1CustomResourceSubresources}
   * @memberof V1beta1CustomResourceDefinitionVersion
   */
  subresources?: V1beta1CustomResourceSubresources
}
