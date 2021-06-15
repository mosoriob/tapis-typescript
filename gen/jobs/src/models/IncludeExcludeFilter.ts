/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
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
 * @interface IncludeExcludeFilter
 */
export interface IncludeExcludeFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof IncludeExcludeFilter
     */
    includes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IncludeExcludeFilter
     */
    excludes?: Array<string>;
}

export function IncludeExcludeFilterFromJSON(json: any): IncludeExcludeFilter {
    return IncludeExcludeFilterFromJSONTyped(json, false);
}

export function IncludeExcludeFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncludeExcludeFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'includes': !exists(json, 'includes') ? undefined : json['includes'],
        'excludes': !exists(json, 'excludes') ? undefined : json['excludes'],
    };
}

export function IncludeExcludeFilterToJSON(value?: IncludeExcludeFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'includes': value.includes,
        'excludes': value.excludes,
    };
}

