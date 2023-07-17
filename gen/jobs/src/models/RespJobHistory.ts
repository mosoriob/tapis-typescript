/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    JobHistoryDisplayDTO,
    JobHistoryDisplayDTOFromJSON,
    JobHistoryDisplayDTOFromJSONTyped,
    JobHistoryDisplayDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespJobHistory
 */
export interface RespJobHistory {
    /**
     * 
     * @type {string}
     * @memberof RespJobHistory
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespJobHistory
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespJobHistory
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof RespJobHistory
     */
    metadata?: object;
    /**
     * 
     * @type {Array<JobHistoryDisplayDTO>}
     * @memberof RespJobHistory
     */
    result?: Array<JobHistoryDisplayDTO>;
}

export function RespJobHistoryFromJSON(json: any): RespJobHistory {
    return RespJobHistoryFromJSONTyped(json, false);
}

export function RespJobHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespJobHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(JobHistoryDisplayDTOFromJSON)),
    };
}

export function RespJobHistoryToJSON(value?: RespJobHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'version': value.version,
        'metadata': value.metadata,
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(JobHistoryDisplayDTOToJSON)),
    };
}
