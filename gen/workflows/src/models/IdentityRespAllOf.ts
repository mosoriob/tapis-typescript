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
    Identity,
    IdentityFromJSON,
    IdentityFromJSONTyped,
    IdentityToJSON,
} from './';

/**
 * 
 * @export
 * @interface IdentityRespAllOf
 */
export interface IdentityRespAllOf {
    /**
     * 
     * @type {Identity}
     * @memberof IdentityRespAllOf
     */
    result?: Identity;
}

export function IdentityRespAllOfFromJSON(json: any): IdentityRespAllOf {
    return IdentityRespAllOfFromJSONTyped(json, false);
}

export function IdentityRespAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityRespAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : IdentityFromJSON(json['result']),
    };
}

export function IdentityRespAllOfToJSON(value?: IdentityRespAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': IdentityToJSON(value.result),
    };
}

