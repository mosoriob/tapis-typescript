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
    Pipeline,
    PipelineFromJSON,
    PipelineFromJSONTyped,
    PipelineToJSON,
    RespBase,
    RespBaseFromJSON,
    RespBaseFromJSONTyped,
    RespBaseToJSON,
    RespPipelineAllOf,
    RespPipelineAllOfFromJSON,
    RespPipelineAllOfFromJSONTyped,
    RespPipelineAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespPipeline
 */
export interface RespPipeline {
    /**
     * 
     * @type {string}
     * @memberof RespPipeline
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof RespPipeline
     */
    message: string;
    /**
     * 
     * @type {Pipeline}
     * @memberof RespPipeline
     */
    result: Pipeline;
    /**
     * 
     * @type {string}
     * @memberof RespPipeline
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof RespPipeline
     */
    metadata: object;
}

export function RespPipelineFromJSON(json: any): RespPipeline {
    return RespPipelineFromJSONTyped(json, false);
}

export function RespPipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespPipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': PipelineFromJSON(json['result']),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function RespPipelineToJSON(value?: RespPipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': PipelineToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}
