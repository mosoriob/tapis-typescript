/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    NativeLinuxOpResult,
    NativeLinuxOpResultFromJSON,
    NativeLinuxOpResultFromJSONTyped,
    NativeLinuxOpResultToJSON,
} from './';

/**
 * 
 * @export
 * @interface NativeLinuxOpResultResponse
 */
export interface NativeLinuxOpResultResponse {
    /**
     * 
     * @type {string}
     * @memberof NativeLinuxOpResultResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof NativeLinuxOpResultResponse
     */
    message?: string;
    /**
     * 
     * @type {NativeLinuxOpResult}
     * @memberof NativeLinuxOpResultResponse
     */
    result?: NativeLinuxOpResult;
    /**
     * 
     * @type {string}
     * @memberof NativeLinuxOpResultResponse
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof NativeLinuxOpResultResponse
     */
    metadata?: object;
}

export function NativeLinuxOpResultResponseFromJSON(json: any): NativeLinuxOpResultResponse {
    return NativeLinuxOpResultResponseFromJSONTyped(json, false);
}

export function NativeLinuxOpResultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NativeLinuxOpResultResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : NativeLinuxOpResultFromJSON(json['result']),
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function NativeLinuxOpResultResponseToJSON(value?: NativeLinuxOpResultResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': NativeLinuxOpResultToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

