/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BaseDataIntegrityProfile,
    BaseDataIntegrityProfileFromJSON,
    BaseDataIntegrityProfileFromJSONTyped,
    BaseDataIntegrityProfileToJSON,
    ChecksumDataIntegrityProfileAllOf,
    ChecksumDataIntegrityProfileAllOfFromJSON,
    ChecksumDataIntegrityProfileAllOfFromJSONTyped,
    ChecksumDataIntegrityProfileAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ByteCheckDataIntegrityProfile
 */
export interface ByteCheckDataIntegrityProfile {
    /**
     * 
     * @type {string}
     * @memberof ByteCheckDataIntegrityProfile
     */
    type: string;
}

export function ByteCheckDataIntegrityProfileFromJSON(json: any): ByteCheckDataIntegrityProfile {
    return ByteCheckDataIntegrityProfileFromJSONTyped(json, false);
}

export function ByteCheckDataIntegrityProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ByteCheckDataIntegrityProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ByteCheckDataIntegrityProfileToJSON(value?: ByteCheckDataIntegrityProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

