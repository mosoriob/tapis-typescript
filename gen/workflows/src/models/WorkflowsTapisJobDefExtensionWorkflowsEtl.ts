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
/**
 * 
 * @export
 * @interface WorkflowsTapisJobDefExtensionWorkflowsEtl
 */
export interface WorkflowsTapisJobDefExtensionWorkflowsEtl {
    /**
     * 
     * @type {string}
     * @memberof WorkflowsTapisJobDefExtensionWorkflowsEtl
     */
    input?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowsTapisJobDefExtensionWorkflowsEtl
     */
    output?: string;
}

export function WorkflowsTapisJobDefExtensionWorkflowsEtlFromJSON(json: any): WorkflowsTapisJobDefExtensionWorkflowsEtl {
    return WorkflowsTapisJobDefExtensionWorkflowsEtlFromJSONTyped(json, false);
}

export function WorkflowsTapisJobDefExtensionWorkflowsEtlFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowsTapisJobDefExtensionWorkflowsEtl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'input': !exists(json, 'input') ? undefined : json['input'],
        'output': !exists(json, 'output') ? undefined : json['output'],
    };
}

export function WorkflowsTapisJobDefExtensionWorkflowsEtlToJSON(value?: WorkflowsTapisJobDefExtensionWorkflowsEtl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'input': value.input,
        'output': value.output,
    };
}
