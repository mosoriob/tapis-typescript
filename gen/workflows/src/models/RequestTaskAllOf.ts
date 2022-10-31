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
    HTTPMethodEnum,
    HTTPMethodEnumFromJSON,
    HTTPMethodEnumFromJSONTyped,
    HTTPMethodEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface RequestTaskAllOf
 */
export interface RequestTaskAllOf {
    /**
     * 
     * @type {object}
     * @memberof RequestTaskAllOf
     */
    auth?: object;
    /**
     * 
     * @type {object}
     * @memberof RequestTaskAllOf
     */
    data?: object;
    /**
     * 
     * @type {object}
     * @memberof RequestTaskAllOf
     */
    headers?: object;
    /**
     * 
     * @type {HTTPMethodEnum}
     * @memberof RequestTaskAllOf
     */
    http_method?: HTTPMethodEnum | null;
    /**
     * 
     * @type {object}
     * @memberof RequestTaskAllOf
     */
    query_params?: object;
    /**
     * 
     * @type {any}
     * @memberof RequestTaskAllOf
     */
    type?: any | null;
    /**
     * 
     * @type {string}
     * @memberof RequestTaskAllOf
     */
    url?: string;
}

export function RequestTaskAllOfFromJSON(json: any): RequestTaskAllOf {
    return RequestTaskAllOfFromJSONTyped(json, false);
}

export function RequestTaskAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestTaskAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auth': !exists(json, 'auth') ? undefined : json['auth'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'headers': !exists(json, 'headers') ? undefined : json['headers'],
        'http_method': !exists(json, 'http_method') ? undefined : HTTPMethodEnumFromJSON(json['http_method']),
        'query_params': !exists(json, 'query_params') ? undefined : json['query_params'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function RequestTaskAllOfToJSON(value?: RequestTaskAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auth': value.auth,
        'data': value.data,
        'headers': value.headers,
        'http_method': HTTPMethodEnumToJSON(value.http_method),
        'query_params': value.query_params,
        'type': value.type,
        'url': value.url,
    };
}

