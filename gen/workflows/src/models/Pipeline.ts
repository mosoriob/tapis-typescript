/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ExecutionProfile,
    ExecutionProfileFromJSON,
    ExecutionProfileFromJSONTyped,
    ExecutionProfileToJSON,
    Task,
    TaskFromJSON,
    TaskFromJSONTyped,
    TaskToJSON,
} from './';

/**
 * 
 * @export
 * @interface Pipeline
 */
export interface Pipeline {
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    uuid?: string;
    /**
     * 
     * @type {ExecutionProfile}
     * @memberof Pipeline
     */
    execution_profile?: ExecutionProfile;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    current_run?: string;
    /**
     * 
     * @type {string}
     * @memberof Pipeline
     */
    last_run?: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof Pipeline
     */
    tasks?: Array<Task>;
}

export function PipelineFromJSON(json: any): Pipeline {
    return PipelineFromJSONTyped(json, false);
}

export function PipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'group': !exists(json, 'group') ? undefined : json['group'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'execution_profile': !exists(json, 'execution_profile') ? undefined : ExecutionProfileFromJSON(json['execution_profile']),
        'current_run': !exists(json, 'current_run') ? undefined : json['current_run'],
        'last_run': !exists(json, 'last_run') ? undefined : json['last_run'],
        'tasks': !exists(json, 'tasks') ? undefined : ((json['tasks'] as Array<any>).map(TaskFromJSON)),
    };
}

export function PipelineToJSON(value?: Pipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'group': value.group,
        'owner': value.owner,
        'uuid': value.uuid,
        'execution_profile': ExecutionProfileToJSON(value.execution_profile),
        'current_run': value.current_run,
        'last_run': value.last_run,
        'tasks': value.tasks === undefined ? undefined : ((value.tasks as Array<any>).map(TaskToJSON)),
    };
}

