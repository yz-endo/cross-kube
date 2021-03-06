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
import ExtensionsV1beta1DeploymentStrategy from './ExtensionsV1beta1DeploymentStrategy'
import ExtensionsV1beta1RollbackConfig from './ExtensionsV1beta1RollbackConfig'
import V1LabelSelector from './V1LabelSelector'
import V1PodTemplateSpec from './V1PodTemplateSpec'

/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 * @export
 * @interface ExtensionsV1beta1DeploymentSpec
 */
export default interface ExtensionsV1beta1DeploymentSpec extends KubeObject {
  /**
   * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  minReadySeconds?: number

  /**
   * Indicates that the deployment is paused and will not be processed by the deployment controller.
   * @type {boolean}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  paused?: boolean

  /**
   * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means \"no deadline\".
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  progressDeadlineSeconds?: number

  /**
   * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  replicas?: number

  /**
   * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means \"retaining all old RelicaSets\".
   * @type {number}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  revisionHistoryLimit?: number

  /**
   *
   * @type {ExtensionsV1beta1RollbackConfig}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  rollbackTo?: ExtensionsV1beta1RollbackConfig

  /**
   *
   * @type {V1LabelSelector}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  selector?: V1LabelSelector

  /**
   *
   * @type {ExtensionsV1beta1DeploymentStrategy}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  strategy?: ExtensionsV1beta1DeploymentStrategy

  /**
   *
   * @type {V1PodTemplateSpec}
   * @memberof ExtensionsV1beta1DeploymentSpec
   */
  template: V1PodTemplateSpec
}
