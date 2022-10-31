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
    Archive,
    ArchiveFromJSON,
    ArchiveFromJSONTyped,
    ArchiveToJSON,
} from './';

/**
 * 
 * @export
 * @interface ArchiveRespAllOf
 */
export interface ArchiveRespAllOf {
    /**
     * 
     * @type {Archive}
     * @memberof ArchiveRespAllOf
     */
    result?: Archive;
}

export function ArchiveRespAllOfFromJSON(json: any): ArchiveRespAllOf {
    return ArchiveRespAllOfFromJSONTyped(json, false);
}

export function ArchiveRespAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArchiveRespAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : ArchiveFromJSON(json['result']),
    };
}

export function ArchiveRespAllOfToJSON(value?: ArchiveRespAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': ArchiveToJSON(value.result),
    };
}

