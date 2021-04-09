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
 * @interface ReqAddChildRole
 */
export interface ReqAddChildRole {
    /**
     * 
     * @type {string}
     * @memberof ReqAddChildRole
     */
    roleTenant?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqAddChildRole
     */
    parentRoleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqAddChildRole
     */
    childRoleName?: string;
}

export function ReqAddChildRoleFromJSON(json: any): ReqAddChildRole {
    return ReqAddChildRoleFromJSONTyped(json, false);
}

export function ReqAddChildRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqAddChildRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roleTenant': !exists(json, 'roleTenant') ? undefined : json['roleTenant'],
        'parentRoleName': !exists(json, 'parentRoleName') ? undefined : json['parentRoleName'],
        'childRoleName': !exists(json, 'childRoleName') ? undefined : json['childRoleName'],
    };
}

export function ReqAddChildRoleToJSON(value?: ReqAddChildRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roleTenant': value.roleTenant,
        'parentRoleName': value.parentRoleName,
        'childRoleName': value.childRoleName,
    };
}


