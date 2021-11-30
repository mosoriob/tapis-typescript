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
 * @interface ReqUserHasRole
 */
export interface ReqUserHasRole {
    /**
     * 
     * @type {string}
     * @memberof ReqUserHasRole
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqUserHasRole
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqUserHasRole
     */
    roleName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReqUserHasRole
     */
    orAdmin?: boolean;
}

export function ReqUserHasRoleFromJSON(json: any): ReqUserHasRole {
    return ReqUserHasRoleFromJSONTyped(json, false);
}

export function ReqUserHasRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqUserHasRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'roleName': !exists(json, 'roleName') ? undefined : json['roleName'],
        'orAdmin': !exists(json, 'orAdmin') ? undefined : json['orAdmin'],
    };
}

export function ReqUserHasRoleToJSON(value?: ReqUserHasRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'user': value.user,
        'roleName': value.roleName,
        'orAdmin': value.orAdmin,
    };
}

