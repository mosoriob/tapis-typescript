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
    EnumTaskType,
    EnumTaskTypeFromJSON,
    EnumTaskTypeFromJSONTyped,
    EnumTaskTypeToJSON,
    ExecutionProfile,
    ExecutionProfileFromJSON,
    ExecutionProfileFromJSONTyped,
    ExecutionProfileToJSON,
    NullableAnyType,
    NullableAnyTypeFromJSON,
    NullableAnyTypeFromJSONTyped,
    NullableAnyTypeToJSON,
    ReqBaseTask,
    ReqBaseTaskFromJSON,
    ReqBaseTaskFromJSONTyped,
    ReqBaseTaskToJSON,
    TapisActorTaskAllOf,
    TapisActorTaskAllOfFromJSON,
    TapisActorTaskAllOfFromJSONTyped,
    TapisActorTaskAllOfToJSON,
    TaskDependency,
    TaskDependencyFromJSON,
    TaskDependencyFromJSONTyped,
    TaskDependencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface TapisActorTask
 */
export interface TapisActorTask {
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof TapisActorTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof TapisActorTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    description?: string;
    /**
     * 
     * @type {ExecutionProfile}
     * @memberof TapisActorTask
     */
    execution_profile?: ExecutionProfile;
    /**
     * 
     * @type {object}
     * @memberof TapisActorTask
     */
    input?: object;
    /**
     * 
     * @type {object}
     * @memberof TapisActorTask
     */
    output?: object;
    /**
     * 
     * @type {boolean}
     * @memberof TapisActorTask
     */
    poll?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TapisActorTask
     */
    tapis_actor_id?: string;
    /**
     * 
     * @type {NullableAnyType}
     * @memberof TapisActorTask
     */
    tapis_actor_message?: NullableAnyType | null;
}

export function TapisActorTaskFromJSON(json: any): TapisActorTask {
    return TapisActorTaskFromJSONTyped(json, false);
}

export function TapisActorTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapisActorTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': EnumTaskTypeFromJSON(json['type']),
        'depends_on': !exists(json, 'depends_on') ? undefined : ((json['depends_on'] as Array<any>).map(TaskDependencyFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'execution_profile': !exists(json, 'execution_profile') ? undefined : ExecutionProfileFromJSON(json['execution_profile']),
        'input': !exists(json, 'input') ? undefined : json['input'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'poll': !exists(json, 'poll') ? undefined : json['poll'],
        'tapis_actor_id': !exists(json, 'tapis_actor_id') ? undefined : json['tapis_actor_id'],
        'tapis_actor_message': !exists(json, 'tapis_actor_message') ? undefined : NullableAnyTypeFromJSON(json['tapis_actor_message']),
    };
}

export function TapisActorTaskToJSON(value?: TapisActorTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': EnumTaskTypeToJSON(value.type),
        'depends_on': value.depends_on === undefined ? undefined : ((value.depends_on as Array<any>).map(TaskDependencyToJSON)),
        'description': value.description,
        'execution_profile': ExecutionProfileToJSON(value.execution_profile),
        'input': value.input,
        'output': value.output,
        'poll': value.poll,
        'tapis_actor_id': value.tapis_actor_id,
        'tapis_actor_message': NullableAnyTypeToJSON(value.tapis_actor_message),
    };
}

