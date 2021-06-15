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
 * @interface SkSecret
 */
export interface SkSecret {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SkSecret
     */
    secretMap?: { [key: string]: string; };
    /**
     * 
     * @type {SkSecretMetadata}
     * @memberof SkSecret
     */
    metadata?: SkSecretMetadata;
}

export function SkSecretFromJSON(json: any): SkSecret {
    return SkSecretFromJSONTyped(json, false);
}

export function SkSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secretMap': !exists(json, 'secretMap') ? undefined : json['secretMap'],
        'metadata': !exists(json, 'metadata') ? undefined : SkSecretMetadataFromJSON(json['metadata']),
    };
}

export function SkSecretToJSON(value?: SkSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secretMap': value.secretMap,
        'metadata': SkSecretMetadataToJSON(value.metadata),
    };
}

