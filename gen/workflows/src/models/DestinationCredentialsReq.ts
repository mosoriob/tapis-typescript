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
 * @interface DestinationCredentialsReq
 */
export interface DestinationCredentialsReq {
    /**
     * 
     * @type {string}
     * @memberof DestinationCredentialsReq
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof DestinationCredentialsReq
     */
    username?: string;
}

export function DestinationCredentialsReqFromJSON(json: any): DestinationCredentialsReq {
    return DestinationCredentialsReqFromJSONTyped(json, false);
}

export function DestinationCredentialsReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): DestinationCredentialsReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function DestinationCredentialsReqToJSON(value?: DestinationCredentialsReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'username': value.username,
    };
}

