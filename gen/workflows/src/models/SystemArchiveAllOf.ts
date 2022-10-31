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
/**
 * 
 * @export
 * @interface SystemArchiveAllOf
 */
export interface SystemArchiveAllOf {
    /**
     * 
     * @type {string}
     * @memberof SystemArchiveAllOf
     */
    system_id?: string;
}

export function SystemArchiveAllOfFromJSON(json: any): SystemArchiveAllOf {
    return SystemArchiveAllOfFromJSONTyped(json, false);
}

export function SystemArchiveAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemArchiveAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': !exists(json, 'system_id') ? undefined : json['system_id'],
    };
}

export function SystemArchiveAllOfToJSON(value?: SystemArchiveAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
    };
}

