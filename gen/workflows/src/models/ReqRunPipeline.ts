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
import {
    ArgSpec,
    ArgSpecFromJSON,
    ArgSpecFromJSONTyped,
    ArgSpecToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqRunPipeline
 */
export interface ReqRunPipeline {
    /**
     * 
     * @type {string}
     * @memberof ReqRunPipeline
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRunPipeline
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: ArgSpec; }}
     * @memberof ReqRunPipeline
     */
    args?: { [key: string]: ArgSpec; };
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqRunPipeline
     */
    directives?: Array<string>;
}

export function ReqRunPipelineFromJSON(json: any): ReqRunPipeline {
    return ReqRunPipelineFromJSONTyped(json, false);
}

export function ReqRunPipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqRunPipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'args': !exists(json, 'args') ? undefined : (mapValues(json['args'], ArgSpecFromJSON)),
        'directives': !exists(json, 'directives') ? undefined : json['directives'],
    };
}

export function ReqRunPipelineToJSON(value?: ReqRunPipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'args': value.args === undefined ? undefined : (mapValues(value.args, ArgSpecToJSON)),
        'directives': value.directives,
    };
}

