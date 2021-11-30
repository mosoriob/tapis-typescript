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
 * @interface RespDeleteNonce
 */
export interface RespDeleteNonce {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespDeleteNonce
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespDeleteNonce
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespDeleteNonce
     */
    status?: RespDeleteNonceStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RespDeleteNonce
     */
    result?: RespDeleteNonceResultEnum;
}

/**
* @export
* @enum {string}
*/
export enum RespDeleteNonceStatusEnum {
    Success = 'success',
    Failure = 'failure'
}/**
* @export
* @enum {string}
*/
export enum RespDeleteNonceResultEnum {
    Null = 'null'
}

export function RespDeleteNonceFromJSON(json: any): RespDeleteNonce {
    return RespDeleteNonceFromJSONTyped(json, false);
}

export function RespDeleteNonceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespDeleteNonce {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function RespDeleteNonceToJSON(value?: RespDeleteNonce | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'result': value.result,
    };
}

