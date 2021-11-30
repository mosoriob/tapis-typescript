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
/**
 * 
 * @export
 * @interface ResultChangeCount
 */
export interface ResultChangeCount {
    /**
     * 
     * @type {number}
     * @memberof ResultChangeCount
     */
    changes?: number;
}

export function ResultChangeCountFromJSON(json: any): ResultChangeCount {
    return ResultChangeCountFromJSONTyped(json, false);
}

export function ResultChangeCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultChangeCount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': !exists(json, 'changes') ? undefined : json['changes'],
    };
}

export function ResultChangeCountToJSON(value?: ResultChangeCount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': value.changes,
    };
}

