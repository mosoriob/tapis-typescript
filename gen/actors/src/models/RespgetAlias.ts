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
    Alias,
    AliasFromJSON,
    AliasFromJSONTyped,
    AliasToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGetAlias
 */
export interface RespGetAlias {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespGetAlias
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespGetAlias
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespGetAlias
     */
    status?: RespGetAliasStatusEnum;
    /**
     * 
     * @type {Alias}
     * @memberof RespGetAlias
     */
    result?: Alias;
}

/**
* @export
* @enum {string}
*/
export enum RespGetAliasStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function RespGetAliasFromJSON(json: any): RespGetAlias {
    return RespGetAliasFromJSONTyped(json, false);
}

export function RespGetAliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGetAlias {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : AliasFromJSON(json['result']),
    };
}

export function RespGetAliasToJSON(value?: RespGetAlias | null): any {
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
        'result': AliasToJSON(value.result),
    };
}

