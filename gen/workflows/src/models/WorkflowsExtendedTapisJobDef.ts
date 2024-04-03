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
    WorkflowsTapisJobDefExtension,
    WorkflowsTapisJobDefExtensionFromJSON,
    WorkflowsTapisJobDefExtensionFromJSONTyped,
    WorkflowsTapisJobDefExtensionToJSON,
    WorkflowsTapisJobDefExtensionWorkflows,
    WorkflowsTapisJobDefExtensionWorkflowsFromJSON,
    WorkflowsTapisJobDefExtensionWorkflowsFromJSONTyped,
    WorkflowsTapisJobDefExtensionWorkflowsToJSON,
} from './';

/**
 * 
 * @export
 * @interface WorkflowsExtendedTapisJobDef
 */
export interface WorkflowsExtendedTapisJobDef {
    /**
     * 
     * @type {WorkflowsTapisJobDefExtensionWorkflows}
     * @memberof WorkflowsExtendedTapisJobDef
     */
    workflows?: WorkflowsTapisJobDefExtensionWorkflows;
}

export function WorkflowsExtendedTapisJobDefFromJSON(json: any): WorkflowsExtendedTapisJobDef {
    return WorkflowsExtendedTapisJobDefFromJSONTyped(json, false);
}

export function WorkflowsExtendedTapisJobDefFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowsExtendedTapisJobDef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workflows': !exists(json, 'workflows') ? undefined : WorkflowsTapisJobDefExtensionWorkflowsFromJSON(json['workflows']),
    };
}

export function WorkflowsExtendedTapisJobDefToJSON(value?: WorkflowsExtendedTapisJobDef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workflows': WorkflowsTapisJobDefExtensionWorkflowsToJSON(value.workflows),
    };
}

