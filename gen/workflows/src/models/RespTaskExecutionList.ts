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
    RespList,
    RespListFromJSON,
    RespListFromJSONTyped,
    RespListToJSON,
    RespTaskExecutionListAllOf,
    RespTaskExecutionListAllOfFromJSON,
    RespTaskExecutionListAllOfFromJSONTyped,
    RespTaskExecutionListAllOfToJSON,
    TaskExecution,
    TaskExecutionFromJSON,
    TaskExecutionFromJSONTyped,
    TaskExecutionToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespTaskExecutionList
 */
export interface RespTaskExecutionList {
    /**
     * 
     * @type {string}
     * @memberof RespTaskExecutionList
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespTaskExecutionList
     */
    message: string;
    /**
     * 
     * @type {Array<TaskExecution>}
     * @memberof RespTaskExecutionList
     */
    result: Array<TaskExecution>;
    /**
     * 
     * @type {string}
     * @memberof RespTaskExecutionList
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespTaskExecutionList
     */
    metadata: object;
}

export function RespTaskExecutionListFromJSON(json: any): RespTaskExecutionList {
    return RespTaskExecutionListFromJSONTyped(json, false);
}

export function RespTaskExecutionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespTaskExecutionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': ((json['result'] as Array<any>).map(TaskExecutionFromJSON)),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespTaskExecutionListToJSON(value?: RespTaskExecutionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': ((value.result as Array<any>).map(TaskExecutionToJSON)),
        'version': value.version,
        'metadata': value.metadata,
    };
}
