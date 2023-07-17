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
 * @interface ReqRunPipeline
 */
export interface ReqRunPipeline {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ReqRunPipeline
     */
    params?: { [key: string]: object; };
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
        
        'params': !exists(json, 'params') ? undefined : json['params'],
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
        
        'params': value.params,
        'directives': value.directives,
    };
}
