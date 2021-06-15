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
import {
    ActorNonce,
    ActorNonceFromJSON,
    ActorNonceFromJSONTyped,
    ActorNonceToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListNonces
 */
export interface RespListNonces {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListNonces
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListNonces
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListNonces
     */
    status?: RespListNoncesStatusEnum;
    /**
     * 
     * @type {Array<ActorNonce>}
     * @memberof RespListNonces
     */
    result?: Array<ActorNonce>;
}

/**
* @export
* @enum {string}
*/
export enum RespListNoncesStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespListNoncesFromJSON(json: any): RespListNonces {
    return RespListNoncesFromJSONTyped(json, false);
}

export function RespListNoncesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListNonces {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(ActorNonceFromJSON)),
    };
}

export function RespListNoncesToJSON(value?: RespListNonces | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(ActorNonceToJSON)),
    };
}

