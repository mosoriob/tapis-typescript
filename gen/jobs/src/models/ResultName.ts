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
 * @interface ResultName
 */
export interface ResultName {
    /**
     * 
     * @type {string}
     * @memberof ResultName
     */
    name?: string;
}

export function ResultNameFromJSON(json: any): ResultName {
    return ResultNameFromJSONTyped(json, false);
}

export function ResultNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultName {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ResultNameToJSON(value?: ResultName | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

