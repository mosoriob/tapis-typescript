/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
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
 * @interface BasicResult
 */
export interface BasicResult {
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BasicResult
     */
    resource_name?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BasicResult
     */
    resource_id?: string;
    /**
     * Owner of the resource
     * @type {string}
     * @memberof BasicResult
     */
    resource_owner?: string;
    /**
     * Type of the resource
     * @type {string}
     * @memberof BasicResult
     */
    resource_type?: string;
}

export function BasicResultFromJSON(json: any): BasicResult {
    return BasicResultFromJSONTyped(json, false);
}

export function BasicResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resource_name': !exists(json, 'resource_name') ? undefined : json['resource_name'],
        'resource_id': !exists(json, 'resource_id') ? undefined : json['resource_id'],
        'resource_owner': !exists(json, 'resource_owner') ? undefined : json['resource_owner'],
        'resource_type': !exists(json, 'resource_type') ? undefined : json['resource_type'],
    };
}

export function BasicResultToJSON(value?: BasicResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource_name': value.resource_name,
        'resource_id': value.resource_id,
        'resource_owner': value.resource_owner,
        'resource_type': value.resource_type,
    };
}

