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
    SkSecretVersion,
    SkSecretVersionFromJSON,
    SkSecretVersionFromJSONTyped,
    SkSecretVersionToJSON,
} from './';

/**
 * 
 * @export
 * @interface SkSecretVersionMetadata
 */
export interface SkSecretVersionMetadata {
    /**
     * 
     * @type {string}
     * @memberof SkSecretVersionMetadata
     */
    created_time?: string;
    /**
     * 
     * @type {number}
     * @memberof SkSecretVersionMetadata
     */
    current_version?: number;
    /**
     * 
     * @type {number}
     * @memberof SkSecretVersionMetadata
     */
    max_versions?: number;
    /**
     * 
     * @type {number}
     * @memberof SkSecretVersionMetadata
     */
    oldest_version?: number;
    /**
     * 
     * @type {string}
     * @memberof SkSecretVersionMetadata
     */
    updated_time?: string;
    /**
     * 
     * @type {Array<SkSecretVersion>}
     * @memberof SkSecretVersionMetadata
     */
    versions?: Array<SkSecretVersion>;
}

export function SkSecretVersionMetadataFromJSON(json: any): SkSecretVersionMetadata {
    return SkSecretVersionMetadataFromJSONTyped(json, false);
}

export function SkSecretVersionMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkSecretVersionMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_time': !exists(json, 'created_time') ? undefined : json['created_time'],
        'current_version': !exists(json, 'current_version') ? undefined : json['current_version'],
        'max_versions': !exists(json, 'max_versions') ? undefined : json['max_versions'],
        'oldest_version': !exists(json, 'oldest_version') ? undefined : json['oldest_version'],
        'updated_time': !exists(json, 'updated_time') ? undefined : json['updated_time'],
        'versions': !exists(json, 'versions') ? undefined : ((json['versions'] as Array<any>).map(SkSecretVersionFromJSON)),
    };
}

export function SkSecretVersionMetadataToJSON(value?: SkSecretVersionMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_time': value.created_time,
        'current_version': value.current_version,
        'max_versions': value.max_versions,
        'oldest_version': value.oldest_version,
        'updated_time': value.updated_time,
        'versions': value.versions === undefined ? undefined : ((value.versions as Array<any>).map(SkSecretVersionToJSON)),
    };
}

