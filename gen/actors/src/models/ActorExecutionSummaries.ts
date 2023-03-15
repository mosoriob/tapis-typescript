/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ExecutionSummary,
    ExecutionSummaryFromJSON,
    ExecutionSummaryFromJSONTyped,
    ExecutionSummaryToJSON,
} from './';

/**
 * 
 * @export
 * @interface ActorExecutionSummaries
 */
export interface ActorExecutionSummaries {
    /**
     * the id of the actor
     * @type {string}
     * @memberof ActorExecutionSummaries
     */
    actor_id?: string;
    /**
     * the base URL for this Abaco instance.
     * @type {string}
     * @memberof ActorExecutionSummaries
     */
    api_server?: string;
    /**
     * The user who owns the associated actor.
     * @type {string}
     * @memberof ActorExecutionSummaries
     */
    owner?: string;
    /**
     * 
     * @type {number}
     * @memberof ActorExecutionSummaries
     */
    total_cpu?: number;
    /**
     * 
     * @type {number}
     * @memberof ActorExecutionSummaries
     */
    total_executions?: number;
    /**
     * 
     * @type {number}
     * @memberof ActorExecutionSummaries
     */
    total_io?: number;
    /**
     * 
     * @type {number}
     * @memberof ActorExecutionSummaries
     */
    total_runtime?: number;
    /**
     * 
     * @type {Array<ExecutionSummary>}
     * @memberof ActorExecutionSummaries
     */
    executions?: Array<ExecutionSummary>;
}

export function ActorExecutionSummariesFromJSON(json: any): ActorExecutionSummaries {
    return ActorExecutionSummariesFromJSONTyped(json, false);
}

export function ActorExecutionSummariesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorExecutionSummaries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actor_id': !exists(json, 'actor_id') ? undefined : json['actor_id'],
        'api_server': !exists(json, 'api_server') ? undefined : json['api_server'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'total_cpu': !exists(json, 'total_cpu') ? undefined : json['total_cpu'],
        'total_executions': !exists(json, 'total_executions') ? undefined : json['total_executions'],
        'total_io': !exists(json, 'total_io') ? undefined : json['total_io'],
        'total_runtime': !exists(json, 'total_runtime') ? undefined : json['total_runtime'],
        'executions': !exists(json, 'executions') ? undefined : ((json['executions'] as Array<any>).map(ExecutionSummaryFromJSON)),
    };
}

export function ActorExecutionSummariesToJSON(value?: ActorExecutionSummaries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actor_id': value.actor_id,
        'api_server': value.api_server,
        'owner': value.owner,
        'total_cpu': value.total_cpu,
        'total_executions': value.total_executions,
        'total_io': value.total_io,
        'total_runtime': value.total_runtime,
        'executions': value.executions === undefined ? undefined : ((value.executions as Array<any>).map(ExecutionSummaryToJSON)),
    };
}

