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
 * @interface ReqGrantAdminRole
 */
export interface ReqGrantAdminRole {
    /**
     * 
     * @type {string}
     * @memberof ReqGrantAdminRole
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGrantAdminRole
     */
    user?: string;
}

export function ReqGrantAdminRoleFromJSON(json: any): ReqGrantAdminRole {
    return ReqGrantAdminRoleFromJSONTyped(json, false);
}

export function ReqGrantAdminRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGrantAdminRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function ReqGrantAdminRoleToJSON(value?: ReqGrantAdminRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'user': value.user,
    };
}


