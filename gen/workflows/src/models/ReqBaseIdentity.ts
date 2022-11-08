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
    EnumIdentityType,
    EnumIdentityTypeFromJSON,
    EnumIdentityTypeFromJSONTyped,
    EnumIdentityTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqBaseIdentity
 */
export interface ReqBaseIdentity {
    /**
     * 
     * @type {string}
     * @memberof ReqBaseIdentity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqBaseIdentity
     */
    description?: string;
    /**
     * 
     * @type {EnumIdentityType}
     * @memberof ReqBaseIdentity
     */
    type: EnumIdentityType;
}

export function ReqBaseIdentityFromJSON(json: any): ReqBaseIdentity {
    return ReqBaseIdentityFromJSONTyped(json, false);
}

export function ReqBaseIdentityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqBaseIdentity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': EnumIdentityTypeFromJSON(json['type']),
    };
}

export function ReqBaseIdentityToJSON(value?: ReqBaseIdentity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'type': EnumIdentityTypeToJSON(value.type),
    };
}

