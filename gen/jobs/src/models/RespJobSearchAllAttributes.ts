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
    Job,
    JobFromJSON,
    JobFromJSONTyped,
    JobToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespJobSearchAllAttributes
 */
export interface RespJobSearchAllAttributes {
    /**
     * 
     * @type {string}
     * @memberof RespJobSearchAllAttributes
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespJobSearchAllAttributes
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespJobSearchAllAttributes
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof RespJobSearchAllAttributes
     */
    metadata?: object;
    /**
     * 
     * @type {Array<Job>}
     * @memberof RespJobSearchAllAttributes
     */
    result?: Array<Job>;
}

export function RespJobSearchAllAttributesFromJSON(json: any): RespJobSearchAllAttributes {
    return RespJobSearchAllAttributesFromJSONTyped(json, false);
}

export function RespJobSearchAllAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespJobSearchAllAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(JobFromJSON)),
    };
}

export function RespJobSearchAllAttributesToJSON(value?: RespJobSearchAllAttributes | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(JobToJSON)),
    };
}


