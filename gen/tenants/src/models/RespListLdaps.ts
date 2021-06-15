/* tslint:disable */
/* eslint-disable */
/**
 * Tenants API
 * Manage Tapis Tenants.
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
    LDAP,
    LDAPFromJSON,
    LDAPFromJSONTyped,
    LDAPToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespListLdaps
 */
export interface RespListLdaps {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListLdaps
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListLdaps
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListLdaps
     */
    status?: RespListLdapsStatusEnum;
    /**
     * 
     * @type {Array<LDAP>}
     * @memberof RespListLdaps
     */
    result?: Array<LDAP>;
}

/**
* @export
* @enum {string}
*/
export enum RespListLdapsStatusEnum {
    Success = 'success',
    Error = 'error'
}

export function RespListLdapsFromJSON(json: any): RespListLdaps {
    return RespListLdapsFromJSONTyped(json, false);
}

export function RespListLdapsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListLdaps {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(LDAPFromJSON)),
    };
}

export function RespListLdapsToJSON(value?: RespListLdaps | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(LDAPToJSON)),
    };
}

