/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Machine Learning Hub API
 * The Tapis Machine Learning Hub API provides users access to machine learning models from HuggingFace within the Tapis framework.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    RespBasic,
    RespBasicFromJSON,
    RespBasicFromJSONTyped,
    RespBasicToJSON,
    RespErrorAllOf,
    RespErrorAllOfFromJSON,
    RespErrorAllOfFromJSONTyped,
    RespErrorAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespError
 */
export interface RespError {
    /**
     * 
     * @type {string}
     * @memberof RespError
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespError
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof RespError
     */
    result?: object;
    /**
     * 
     * @type {object}
     * @memberof RespError
     */
    metadata?: object;
}

export function RespErrorFromJSON(json: any): RespError {
    return RespErrorFromJSONTyped(json, false);
}

export function RespErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespErrorToJSON(value?: RespError | null): any {
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
        'result': value.result,
        'metadata': value.metadata,
    };
}
