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
    BaseResp,
    BaseRespFromJSON,
    BaseRespFromJSONTyped,
    BaseRespToJSON,
    Event,
    EventFromJSON,
    EventFromJSONTyped,
    EventToJSON,
    EventRespAllOf,
    EventRespAllOfFromJSON,
    EventRespAllOfFromJSONTyped,
    EventRespAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface EventResp
 */
export interface EventResp {
    /**
     * 
     * @type {string}
     * @memberof EventResp
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof EventResp
     */
    message: string;
    /**
     * 
     * @type {Event}
     * @memberof EventResp
     */
    result: Event;
    /**
     * 
     * @type {string}
     * @memberof EventResp
     */
    version: string;
    /**
     * 
     * @type {object}
     * @memberof EventResp
     */
    metadata: object;
}

export function EventRespFromJSON(json: any): EventResp {
    return EventRespFromJSONTyped(json, false);
}

export function EventRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'result': EventFromJSON(json['result']),
        'version': json['version'],
        'metadata': json['metadata'],
    };
}

export function EventRespToJSON(value?: EventResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'result': EventToJSON(value.result),
        'version': value.version,
        'metadata': value.metadata,
    };
}

