/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
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
 * @interface FilePermission
 */
export interface FilePermission {
    /**
     * 
     * @type {string}
     * @memberof FilePermission
     */
    tenantId?: string;
    /**
     * 
     * @type {string}
     * @memberof FilePermission
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof FilePermission
     */
    systemId?: string;
    /**
     * 
     * @type {string}
     * @memberof FilePermission
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof FilePermission
     */
    permission?: FilePermissionPermissionEnum;
}

/**
* @export
* @enum {string}
*/
export enum FilePermissionPermissionEnum {
    Read = 'READ',
    Modify = 'MODIFY'
}

export function FilePermissionFromJSON(json: any): FilePermission {
    return FilePermissionFromJSONTyped(json, false);
}

export function FilePermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilePermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantId': !exists(json, 'tenantId') ? undefined : json['tenantId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'systemId': !exists(json, 'systemId') ? undefined : json['systemId'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'permission': !exists(json, 'permission') ? undefined : json['permission'],
    };
}

export function FilePermissionToJSON(value?: FilePermission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantId': value.tenantId,
        'username': value.username,
        'systemId': value.systemId,
        'path': value.path,
        'permission': value.permission,
    };
}

