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
/**
 * 
 * @export
 * @interface FileStringResponse
 */
export interface FileStringResponse {
    /**
     * 
     * @type {string}
     * @memberof FileStringResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof FileStringResponse
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof FileStringResponse
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof FileStringResponse
     */
    version?: string;
    /**
     * 
     * @type {object}
     * @memberof FileStringResponse
     */
    metadata?: object;
}

export function FileStringResponseFromJSON(json: any): FileStringResponse {
    return FileStringResponseFromJSONTyped(json, false);
}

export function FileStringResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileStringResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function FileStringResponseToJSON(value?: FileStringResponse | null): any {
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


