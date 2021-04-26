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
import {
    Measurement,
    MeasurementFromJSON,
    MeasurementFromJSONTyped,
    MeasurementToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespCreateMeasurement
 */
export interface RespCreateMeasurement {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespCreateMeasurement
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespCreateMeasurement
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespCreateMeasurement
     */
    status?: RespCreateMeasurementStatusEnum;
    /**
     * 
     * @type {Array<Measurement>}
     * @memberof RespCreateMeasurement
     */
    result?: Array<Measurement>;
}

/**
* @export
* @enum {string}
*/
export enum RespCreateMeasurementStatusEnum {
    Success = 'success'
}

export function RespCreateMeasurementFromJSON(json: any): RespCreateMeasurement {
    return RespCreateMeasurementFromJSONTyped(json, false);
}

export function RespCreateMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespCreateMeasurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(MeasurementFromJSON)),
    };
}

export function RespCreateMeasurementToJSON(value?: RespCreateMeasurement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(MeasurementToJSON)),
    };
}


