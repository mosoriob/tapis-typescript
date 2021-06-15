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
 * @interface RespCreateSite
 */
export interface RespCreateSite {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespCreateSite
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespCreateSite
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespCreateSite
     */
    status?: RespCreateSiteStatusEnum;
    /**
     * 
     * @type {Array<Site>}
     * @memberof RespCreateSite
     */
    result?: Array<Site>;
}

/**
* @export
* @enum {string}
*/
export enum RespCreateSiteStatusEnum {
    Success = 'success'
}

export function RespCreateSiteFromJSON(json: any): RespCreateSite {
    return RespCreateSiteFromJSONTyped(json, false);
}

export function RespCreateSiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespCreateSite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(SiteFromJSON)),
    };
}

export function RespCreateSiteToJSON(value?: RespCreateSite | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(SiteToJSON)),
    };
}

