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
    ListResp,
    ListRespFromJSON,
    ListRespFromJSONTyped,
    ListRespToJSON,
    Task,
    TaskFromJSON,
    TaskFromJSONTyped,
    TaskToJSON,
    TaskListRespAllOf,
    TaskListRespAllOfFromJSON,
    TaskListRespAllOfFromJSONTyped,
    TaskListRespAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface TaskListResp
 */
export interface TaskListResp {
    /**
     * 
     * @type {string}
     * @memberof TaskListResp
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof TaskListResp
     */
    message: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof TaskListResp
     */
    result: Array<Task>;
    /**
     * 
     * @type {string}
     * @memberof TaskListResp
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof TaskListResp
     */
    metadata: object;
}

export function TaskListRespFromJSON(json: any): TaskListResp {
    return TaskListRespFromJSONTyped(json, false);
}

export function TaskListRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskListResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': ((json['result'] as Array<any>).map(TaskFromJSON)),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function TaskListRespToJSON(value?: TaskListResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': ((value.result as Array<any>).map(TaskToJSON)),
        'version': value.version,
        'metadata': value.metadata,
    };
}

