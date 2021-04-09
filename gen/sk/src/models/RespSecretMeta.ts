/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Security API
 * The Tapis Security API provides access to the Tapis Security Kernel authorization and secrets facilities.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    SkSecretMetadata,
    SkSecretMetadataFromJSON,
    SkSecretMetadataFromJSONTyped,
    SkSecretMetadataToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespSecretMeta
 */
export interface RespSecretMeta {
    /**
     * 
     * @type {string}
     * @memberof RespSecretMeta
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSecretMeta
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespSecretMeta
     */
    version?: string;
    /**
     * 
     * @type {SkSecretMetadata}
     * @memberof RespSecretMeta
     */
    result?: SkSecretMetadata;
}

export function RespSecretMetaFromJSON(json: any): RespSecretMeta {
    return RespSecretMetaFromJSONTyped(json, false);
}

export function RespSecretMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespSecretMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'result': !exists(json, 'result') ? undefined : SkSecretMetadataFromJSON(json['result']),
    };
}

export function RespSecretMetaToJSON(value?: RespSecretMeta | null): any {
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
        'result': SkSecretMetadataToJSON(value.result),
    };
}


