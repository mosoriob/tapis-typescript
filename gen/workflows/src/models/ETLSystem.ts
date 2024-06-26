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
/**
 * 
 * @export
 * @interface ETLSystem
 */
export interface ETLSystem {
    /**
     * 
     * @type {string}
     * @memberof ETLSystem
     */
    system_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ETLSystem
     */
    path?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ETLSystem
     */
    include_patterns?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ETLSystem
     */
    exclude_patterns?: Array<string>;
}

export function ETLSystemFromJSON(json: any): ETLSystem {
    return ETLSystemFromJSONTyped(json, false);
}

export function ETLSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': !exists(json, 'system_id') ? undefined : json['system_id'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'include_patterns': !exists(json, 'include_patterns') ? undefined : json['include_patterns'],
        'exclude_patterns': !exists(json, 'exclude_patterns') ? undefined : json['exclude_patterns'],
    };
}

export function ETLSystemToJSON(value?: ETLSystem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
        'path': value.path,
        'include_patterns': value.include_patterns,
        'exclude_patterns': value.exclude_patterns,
    };
}

