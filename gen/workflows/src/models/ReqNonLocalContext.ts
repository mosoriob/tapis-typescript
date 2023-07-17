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
    EnumContextType,
    EnumContextTypeFromJSON,
    EnumContextTypeFromJSONTyped,
    EnumContextTypeToJSON,
    EnumContextVisibility,
    EnumContextVisibilityFromJSON,
    EnumContextVisibilityFromJSONTyped,
    EnumContextVisibilityToJSON,
    ReqBaseContext,
    ReqBaseContextFromJSON,
    ReqBaseContextFromJSONTyped,
    ReqBaseContextToJSON,
    ReqNonLocalContextAllOf,
    ReqNonLocalContextAllOfFromJSON,
    ReqNonLocalContextAllOfFromJSONTyped,
    ReqNonLocalContextAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqNonLocalContext
 */
export interface ReqNonLocalContext {
    /**
     * 
     * @type {EnumContextType}
     * @memberof ReqNonLocalContext
     */
    type: EnumContextType;
    /**
     * 
     * @type {EnumContextVisibility}
     * @memberof ReqNonLocalContext
     */
    visibility: EnumContextVisibility;
    /**
     * 
     * @type {string}
     * @memberof ReqNonLocalContext
     */
    url: string;
}

export function ReqNonLocalContextFromJSON(json: any): ReqNonLocalContext {
    return ReqNonLocalContextFromJSONTyped(json, false);
}

export function ReqNonLocalContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqNonLocalContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumContextTypeFromJSON(json['type']),
        'visibility': EnumContextVisibilityFromJSON(json['visibility']),
        'url': json['url'],
    };
}

export function ReqNonLocalContextToJSON(value?: ReqNonLocalContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumContextTypeToJSON(value.type),
        'visibility': EnumContextVisibilityToJSON(value.visibility),
        'url': value.url,
    };
}
