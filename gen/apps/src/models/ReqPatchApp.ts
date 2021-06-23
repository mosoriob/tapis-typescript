/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    JobAttributes,
    JobAttributesFromJSON,
    JobAttributesFromJSONTyped,
    JobAttributesToJSON,
    RuntimeEnum,
    RuntimeEnumFromJSON,
    RuntimeEnumFromJSONTyped,
    RuntimeEnumToJSON,
    RuntimeOptionEnum,
    RuntimeOptionEnumFromJSON,
    RuntimeOptionEnumFromJSONTyped,
    RuntimeOptionEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqPatchApp
 */
export interface ReqPatchApp {
    /**
     * 
     * @type {string}
     * @memberof ReqPatchApp
     */
    description?: string;
    /**
     * 
     * @type {RuntimeEnum}
     * @memberof ReqPatchApp
     */
    runtime?: RuntimeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReqPatchApp
     */
    runtimeVersion?: string;
    /**
     * 
     * @type {Array<RuntimeOptionEnum>}
     * @memberof ReqPatchApp
     */
    runtimeOptions?: Array<RuntimeOptionEnum>;
    /**
     * 
     * @type {string}
     * @memberof ReqPatchApp
     */
    containerImage?: string;
    /**
     * 
     * @type {number}
     * @memberof ReqPatchApp
     */
    maxJobs?: number;
    /**
     * 
     * @type {number}
     * @memberof ReqPatchApp
     */
    maxJobsPerUser?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReqPatchApp
     */
    strictFileInputs?: boolean;
    /**
     * 
     * @type {JobAttributes}
     * @memberof ReqPatchApp
     */
    jobAttributes?: JobAttributes;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqPatchApp
     */
    tags?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof ReqPatchApp
     */
    notes?: object;
}

export function ReqPatchAppFromJSON(json: any): ReqPatchApp {
    return ReqPatchAppFromJSONTyped(json, false);
}

export function ReqPatchAppFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqPatchApp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'runtime': !exists(json, 'runtime') ? undefined : RuntimeEnumFromJSON(json['runtime']),
        'runtimeVersion': !exists(json, 'runtimeVersion') ? undefined : json['runtimeVersion'],
        'runtimeOptions': !exists(json, 'runtimeOptions') ? undefined : ((json['runtimeOptions'] as Array<any>).map(RuntimeOptionEnumFromJSON)),
        'containerImage': !exists(json, 'containerImage') ? undefined : json['containerImage'],
        'maxJobs': !exists(json, 'maxJobs') ? undefined : json['maxJobs'],
        'maxJobsPerUser': !exists(json, 'maxJobsPerUser') ? undefined : json['maxJobsPerUser'],
        'strictFileInputs': !exists(json, 'strictFileInputs') ? undefined : json['strictFileInputs'],
        'jobAttributes': !exists(json, 'jobAttributes') ? undefined : JobAttributesFromJSON(json['jobAttributes']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
    };
}

export function ReqPatchAppToJSON(value?: ReqPatchApp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'runtime': RuntimeEnumToJSON(value.runtime),
        'runtimeVersion': value.runtimeVersion,
        'runtimeOptions': value.runtimeOptions === undefined ? undefined : ((value.runtimeOptions as Array<any>).map(RuntimeOptionEnumToJSON)),
        'containerImage': value.containerImage,
        'maxJobs': value.maxJobs,
        'maxJobsPerUser': value.maxJobsPerUser,
        'strictFileInputs': value.strictFileInputs,
        'jobAttributes': JobAttributesToJSON(value.jobAttributes),
        'tags': value.tags,
        'notes': value.notes,
    };
}


