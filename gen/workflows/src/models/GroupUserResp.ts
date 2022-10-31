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
import {
    BaseResp,
    BaseRespFromJSON,
    BaseRespFromJSONTyped,
    BaseRespToJSON,
    GroupUser,
    GroupUserFromJSON,
    GroupUserFromJSONTyped,
    GroupUserToJSON,
    GroupUserRespAllOf,
    GroupUserRespAllOfFromJSON,
    GroupUserRespAllOfFromJSONTyped,
    GroupUserRespAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface GroupUserResp
 */
export interface GroupUserResp {
    /**
     * 
     * @type {string}
     * @memberof GroupUserResp
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof GroupUserResp
     */
    message: string;
    /**
     * 
     * @type {GroupUser}
     * @memberof GroupUserResp
     */
    result: GroupUser;
    /**
     * 
     * @type {string}
     * @memberof GroupUserResp
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof GroupUserResp
     */
    metadata: object;
}

export function GroupUserRespFromJSON(json: any): GroupUserResp {
    return GroupUserRespFromJSONTyped(json, false);
}

export function GroupUserRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupUserResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': GroupUserFromJSON(json['result']),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function GroupUserRespToJSON(value?: GroupUserResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': GroupUserToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

