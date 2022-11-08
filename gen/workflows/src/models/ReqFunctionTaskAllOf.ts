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
    EnumRuntimeEnvironment,
    EnumRuntimeEnvironmentFromJSON,
    EnumRuntimeEnvironmentFromJSONTyped,
    EnumRuntimeEnvironmentToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqFunctionTaskAllOf
 */
export interface ReqFunctionTaskAllOf {
    /**
     * 
     * @type {EnumRuntimeEnvironment}
     * @memberof ReqFunctionTaskAllOf
     */
    runtime: EnumRuntimeEnvironment;
}

export function ReqFunctionTaskAllOfFromJSON(json: any): ReqFunctionTaskAllOf {
    return ReqFunctionTaskAllOfFromJSONTyped(json, false);
}

export function ReqFunctionTaskAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqFunctionTaskAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'runtime': EnumRuntimeEnvironmentFromJSON(json['runtime']),
    };
}

export function ReqFunctionTaskAllOfToJSON(value?: ReqFunctionTaskAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'runtime': EnumRuntimeEnvironmentToJSON(value.runtime),
    };
}

