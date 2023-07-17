/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
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
    Roles,
    RolesFromJSON,
    RolesFromJSONTyped,
    RolesToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespRevokeRole
 */
export interface RespRevokeRole {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespRevokeRole
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespRevokeRole
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespRevokeRole
     */
    status?: RespRevokeRoleStatusEnum;
    /**
     * 
     * @type {Array<Roles>}
     * @memberof RespRevokeRole
     */
    result?: Array<Roles>;
}

/**
* @export
* @enum {string}
*/
export enum RespRevokeRoleStatusEnum {
    Success = 'success'
}

export function RespRevokeRoleFromJSON(json: any): RespRevokeRole {
    return RespRevokeRoleFromJSONTyped(json, false);
}

export function RespRevokeRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespRevokeRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(RolesFromJSON)),
    };
}

export function RespRevokeRoleToJSON(value?: RespRevokeRole | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(RolesToJSON)),
    };
}
