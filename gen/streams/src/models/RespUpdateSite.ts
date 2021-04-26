/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Site,
    SiteFromJSON,
    SiteFromJSONTyped,
    SiteToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespUpdateSite
 */
export interface RespUpdateSite {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdateSite
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdateSite
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdateSite
     */
    status?: RespUpdateSiteStatusEnum;
    /**
     * 
     * @type {Site}
     * @memberof RespUpdateSite
     */
    result?: Site;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdateSiteStatusEnum {
    Success = 'success'
}

export function RespUpdateSiteFromJSON(json: any): RespUpdateSite {
    return RespUpdateSiteFromJSONTyped(json, false);
}

export function RespUpdateSiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdateSite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : SiteFromJSON(json['result']),
    };
}

export function RespUpdateSiteToJSON(value?: RespUpdateSite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'result': SiteToJSON(value.result),
    };
}


