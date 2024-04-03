/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EnumDuplicateSubmissionPolicy,
    EnumDuplicateSubmissionPolicyFromJSON,
    EnumDuplicateSubmissionPolicyFromJSONTyped,
    EnumDuplicateSubmissionPolicyToJSON,
} from './';

/**
 * 
 * @export
 * @interface PipelineExecutionProfileAllOf
 */
export interface PipelineExecutionProfileAllOf {
    /**
     * 
     * @type {EnumDuplicateSubmissionPolicy}
     * @memberof PipelineExecutionProfileAllOf
     */
    duplicate_submission_policy?: EnumDuplicateSubmissionPolicy;
}

export function PipelineExecutionProfileAllOfFromJSON(json: any): PipelineExecutionProfileAllOf {
    return PipelineExecutionProfileAllOfFromJSONTyped(json, false);
}

export function PipelineExecutionProfileAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineExecutionProfileAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duplicate_submission_policy': !exists(json, 'duplicate_submission_policy') ? undefined : EnumDuplicateSubmissionPolicyFromJSON(json['duplicate_submission_policy']),
    };
}

export function PipelineExecutionProfileAllOfToJSON(value?: PipelineExecutionProfileAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duplicate_submission_policy': EnumDuplicateSubmissionPolicyToJSON(value.duplicate_submission_policy),
    };
}
