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
    ReqContextCredentials,
    ReqContextCredentialsFromJSON,
    ReqContextCredentialsFromJSONTyped,
    ReqContextCredentialsToJSON,
    ReqRegistryContext,
    ReqRegistryContextFromJSON,
    ReqRegistryContextFromJSONTyped,
    ReqRegistryContextToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqDockerhubContext
 */
export interface ReqDockerhubContext {
    /**
     * 
     * @type {EnumContextType}
     * @memberof ReqDockerhubContext
     */
    type: EnumContextType;
    /**
     * 
     * @type {EnumContextVisibility}
     * @memberof ReqDockerhubContext
     */
    visibility: EnumContextVisibility;
    /**
     * 
     * @type {ReqContextCredentials}
     * @memberof ReqDockerhubContext
     */
    credentials?: ReqContextCredentials;
    /**
     * 
     * @type {string}
     * @memberof ReqDockerhubContext
     */
    identity_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqDockerhubContext
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof ReqDockerhubContext
     */
    tag?: string;
}

export function ReqDockerhubContextFromJSON(json: any): ReqDockerhubContext {
    return ReqDockerhubContextFromJSONTyped(json, false);
}

export function ReqDockerhubContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqDockerhubContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumContextTypeFromJSON(json['type']),
        'visibility': EnumContextVisibilityFromJSON(json['visibility']),
        'credentials': !exists(json, 'credentials') ? undefined : ReqContextCredentialsFromJSON(json['credentials']),
        'identity_uuid': !exists(json, 'identity_uuid') ? undefined : json['identity_uuid'],
        'url': json['url'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
    };
}

export function ReqDockerhubContextToJSON(value?: ReqDockerhubContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumContextTypeToJSON(value.type),
        'visibility': EnumContextVisibilityToJSON(value.visibility),
        'credentials': ReqContextCredentialsToJSON(value.credentials),
        'identity_uuid': value.identity_uuid,
        'url': value.url,
        'tag': value.tag,
    };
}

