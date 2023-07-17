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
 * @interface ReqRepoContextAllOf
 */
export interface ReqRepoContextAllOf {
    /**
     * 
     * @type {string}
     * @memberof ReqRepoContextAllOf
     */
    branch: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRepoContextAllOf
     */
    build_file_path: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRepoContextAllOf
     */
    sub_path?: string;
}

export function ReqRepoContextAllOfFromJSON(json: any): ReqRepoContextAllOf {
    return ReqRepoContextAllOfFromJSONTyped(json, false);
}

export function ReqRepoContextAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqRepoContextAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': json['branch'],
        'build_file_path': json['build_file_path'],
        'sub_path': !exists(json, 'sub_path') ? undefined : json['sub_path'],
    };
}

export function ReqRepoContextAllOfToJSON(value?: ReqRepoContextAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'build_file_path': value.build_file_path,
        'sub_path': value.sub_path,
    };
}
