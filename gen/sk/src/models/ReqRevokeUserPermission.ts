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
 * @interface ReqRevokeUserPermission
 */
export interface ReqRevokeUserPermission {
    /**
     * 
     * @type {string}
     * @memberof ReqRevokeUserPermission
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRevokeUserPermission
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRevokeUserPermission
     */
    permSpec?: string;
}

export function ReqRevokeUserPermissionFromJSON(json: any): ReqRevokeUserPermission {
    return ReqRevokeUserPermissionFromJSONTyped(json, false);
}

export function ReqRevokeUserPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqRevokeUserPermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'permSpec': !exists(json, 'permSpec') ? undefined : json['permSpec'],
    };
}

export function ReqRevokeUserPermissionToJSON(value?: ReqRevokeUserPermission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenant': value.tenant,
        'user': value.user,
        'permSpec': value.permSpec,
    };
}

