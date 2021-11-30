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
 * @interface ReqUpdateRoleOwner
 */
export interface ReqUpdateRoleOwner {
    /**
     * 
     * @type {string}
     * @memberof ReqUpdateRoleOwner
     */
    roleTenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqUpdateRoleOwner
     */
    newOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqUpdateRoleOwner
     */
    newTenant?: string;
}

export function ReqUpdateRoleOwnerFromJSON(json: any): ReqUpdateRoleOwner {
    return ReqUpdateRoleOwnerFromJSONTyped(json, false);
}

export function ReqUpdateRoleOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqUpdateRoleOwner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roleTenant': !exists(json, 'roleTenant') ? undefined : json['roleTenant'],
        'newOwner': !exists(json, 'newOwner') ? undefined : json['newOwner'],
        'newTenant': !exists(json, 'newTenant') ? undefined : json['newTenant'],
    };
}

export function ReqUpdateRoleOwnerToJSON(value?: ReqUpdateRoleOwner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roleTenant': value.roleTenant,
        'newOwner': value.newOwner,
        'newTenant': value.newTenant,
    };
}

