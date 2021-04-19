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
 * @interface ReqGrantUserRoleWithPermission
 */
export interface ReqGrantUserRoleWithPermission {
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRoleWithPermission
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRoleWithPermission
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRoleWithPermission
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqGrantUserRoleWithPermission
     */
    permSpec?: string;
}

export function ReqGrantUserRoleWithPermissionFromJSON(json: any): ReqGrantUserRoleWithPermission {
    return ReqGrantUserRoleWithPermissionFromJSONTyped(json, false);
}

export function ReqGrantUserRoleWithPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqGrantUserRoleWithPermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'roleName': !exists(json, 'roleName') ? undefined : json['roleName'],
        'permSpec': !exists(json, 'permSpec') ? undefined : json['permSpec'],
    };
}

export function ReqGrantUserRoleWithPermissionToJSON(value?: ReqGrantUserRoleWithPermission | null): any {
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
        'permSpec': value.permSpec,
    };
}


