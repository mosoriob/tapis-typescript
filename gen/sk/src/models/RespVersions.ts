/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
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
 * @interface RespVersions
 */
export interface RespVersions {
    /**
     * 
     * @type {string}
     * @memberof RespVersions
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespVersions
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespVersions
     */
    version?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof RespVersions
     */
    result?: Array<number>;
}

export function RespVersionsFromJSON(json: any): RespVersions {
    return RespVersionsFromJSONTyped(json, false);
}

export function RespVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function RespVersionsToJSON(value?: RespVersions | null): any {
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
    };
}

