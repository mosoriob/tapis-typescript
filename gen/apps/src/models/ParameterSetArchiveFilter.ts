/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.0.0-rc1
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
 * @interface ParameterSetArchiveFilter
 */
export interface ParameterSetArchiveFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof ParameterSetArchiveFilter
     */
    includes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ParameterSetArchiveFilter
     */
    excludes?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ParameterSetArchiveFilter
     */
    includeLaunchFiles?: boolean;
}

export function ParameterSetArchiveFilterFromJSON(json: any): ParameterSetArchiveFilter {
    return ParameterSetArchiveFilterFromJSONTyped(json, false);
}

export function ParameterSetArchiveFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterSetArchiveFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'includes': !exists(json, 'includes') ? undefined : json['includes'],
        'excludes': !exists(json, 'excludes') ? undefined : json['excludes'],
        'includeLaunchFiles': !exists(json, 'includeLaunchFiles') ? undefined : json['includeLaunchFiles'],
    };
}

export function ParameterSetArchiveFilterToJSON(value?: ParameterSetArchiveFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'includes': value.includes,
        'excludes': value.excludes,
        'includeLaunchFiles': value.includeLaunchFiles,
    };
}

