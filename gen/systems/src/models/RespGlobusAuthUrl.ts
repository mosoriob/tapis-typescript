/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.3.3
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ResultGlobusAuthUrl,
    ResultGlobusAuthUrlFromJSON,
    ResultGlobusAuthUrlFromJSONTyped,
    ResultGlobusAuthUrlToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGlobusAuthUrl
 */
export interface RespGlobusAuthUrl {
    /**
     * 
     * @type {string}
     * @memberof RespGlobusAuthUrl
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGlobusAuthUrl
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGlobusAuthUrl
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGlobusAuthUrl
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespGlobusAuthUrl
     */
    build?: string;
    /**
     * 
     * @type {ResultGlobusAuthUrl}
     * @memberof RespGlobusAuthUrl
     */
    result?: ResultGlobusAuthUrl;
    /**
     * 
     * @type {object}
     * @memberof RespGlobusAuthUrl
     */
    metadata?: object;
}

export function RespGlobusAuthUrlFromJSON(json: any): RespGlobusAuthUrl {
    return RespGlobusAuthUrlFromJSONTyped(json, false);
}

export function RespGlobusAuthUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGlobusAuthUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'result': !exists(json, 'result') ? undefined : ResultGlobusAuthUrlFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespGlobusAuthUrlToJSON(value?: RespGlobusAuthUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'version': value.version,
        'commit': value.commit,
        'build': value.build,
        'result': ResultGlobusAuthUrlToJSON(value.result),
        'metadata': value.metadata,
    };
}

