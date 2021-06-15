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
 * @interface ReqUserHasRoleMulti
 */
export interface ReqUserHasRoleMulti {
    /**
     * 
     * @type {string}
     * @memberof ReqUserHasRoleMulti
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqUserHasRoleMulti
     */
    user?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqUserHasRoleMulti
     */
    roleNames?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ReqUserHasRoleMulti
     */
    orAdmin?: boolean;
}

export function ReqUserHasRoleMultiFromJSON(json: any): ReqUserHasRoleMulti {
    return ReqUserHasRoleMultiFromJSONTyped(json, false);
}

export function ReqUserHasRoleMultiFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqUserHasRoleMulti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'roleNames': !exists(json, 'roleNames') ? undefined : json['roleNames'],
        'orAdmin': !exists(json, 'orAdmin') ? undefined : json['orAdmin'],
    };
}

export function ReqUserHasRoleMultiToJSON(value?: ReqUserHasRoleMulti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'user': value.user,
        'roleNames': value.roleNames,
        'orAdmin': value.orAdmin,
    };
}

