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
    RespBase,
    RespBaseFromJSON,
    RespBaseFromJSONTyped,
    RespBaseToJSON,
    RespStringAllOf,
    RespStringAllOfFromJSON,
    RespStringAllOfFromJSONTyped,
    RespStringAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespString
 */
export interface RespString {
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    result: string;
    /**
     * 
     * @type {string}
     * @memberof RespString
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespString
     */
    metadata: object;
}

export function RespStringFromJSON(json: any): RespString {
    return RespStringFromJSONTyped(json, false);
}

export function RespStringFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespString {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': json['result'],
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespStringToJSON(value?: RespString | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': value.result,
        'version': value.version,
        'metadata': value.metadata,
    };
}
