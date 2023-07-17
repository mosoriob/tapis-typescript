/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
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
 * @interface GroupUser
 */
export interface GroupUser {
    /**
     * 
     * @type {string}
     * @memberof GroupUser
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof GroupUser
     */
    username?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GroupUser
     */
    is_admin?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GroupUser
     */
    uuid?: string;
}

export function GroupUserFromJSON(json: any): GroupUser {
    return GroupUserFromJSONTyped(json, false);
}

export function GroupUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : json['group'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'is_admin': !exists(json, 'is_admin') ? undefined : json['is_admin'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
    };
}

export function GroupUserToJSON(value?: GroupUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': value.group,
        'username': value.username,
        'is_admin': value.is_admin,
        'uuid': value.uuid,
    };
}
