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
/**
 * 
 * @export
 * @interface ActorExecution
 */
export interface ActorExecution {
    /**
     * the id of the actor
     * @type {string}
     * @memberof ActorExecution
     */
    actorId?: string;
    /**
     * the base URL for this Abaco instance.
     * @type {string}
     * @memberof ActorExecution
     */
    apiServer?: string;
    /**
     * The user who owns the associated actor.
     * @type {string}
     * @memberof ActorExecution
     */
    owner?: string;
    /**
     * 
     * @type {number}
     * @memberof ActorExecution
     */
    cpu?: number;
    /**
     * the id of the executions
     * @type {string}
     * @memberof ActorExecution
     */
    id?: string;
    /**
     * the time the execution started.
     * @type {string}
     * @memberof ActorExecution
     */
    startTime?: string;
    /**
     * the status of the execution.
     * @type {string}
     * @memberof ActorExecution
     */
    status?: ActorExecutionStatusEnum;
    /**
     * the time the message was originally received by Abaco.
     * @type {string}
     * @memberof ActorExecution
     */
    messageReceivedTime?: string;
    /**
     * 
     * @type {number}
     * @memberof ActorExecution
     */
    io?: number;
    /**
     * 
     * @type {number}
     * @memberof ActorExecution
     */
    runtime?: number;
    /**
     * the id of the Abaco worker that supervised the execution.
     * @type {string}
     * @memberof ActorExecution
     */
    workerId?: string;
}

/**
* @export
* @enum {string}
*/
export enum ActorExecutionStatusEnum {
    Submitted = 'SUBMITTED',
    Running = 'RUNNING',
    Complete = 'COMPLETE'
}

export function ActorExecutionFromJSON(json: any): ActorExecution {
    return ActorExecutionFromJSONTyped(json, false);
}

export function ActorExecutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorExecution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actorId': !exists(json, 'actorId') ? undefined : json['actorId'],
        'apiServer': !exists(json, 'apiServer') ? undefined : json['apiServer'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'cpu': !exists(json, 'cpu') ? undefined : json['cpu'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'messageReceivedTime': !exists(json, 'messageReceivedTime') ? undefined : json['messageReceivedTime'],
        'io': !exists(json, 'io') ? undefined : json['io'],
        'runtime': !exists(json, 'runtime') ? undefined : json['runtime'],
        'workerId': !exists(json, 'workerId') ? undefined : json['workerId'],
    };
}

export function ActorExecutionToJSON(value?: ActorExecution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actorId': value.actorId,
        'apiServer': value.apiServer,
        'owner': value.owner,
        'cpu': value.cpu,
        'id': value.id,
        'startTime': value.startTime,
        'status': value.status,
        'messageReceivedTime': value.messageReceivedTime,
        'io': value.io,
        'runtime': value.runtime,
        'workerId': value.workerId,
    };
}

