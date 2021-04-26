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
 * @interface RespListMeasurements
 */
export interface RespListMeasurements {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListMeasurements
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListMeasurements
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListMeasurements
     */
    status?: RespListMeasurementsStatusEnum;
    /**
     * 
     * @type {Array<Measurement>}
     * @memberof RespListMeasurements
     */
    result?: Array<Measurement>;
}

/**
* @export
* @enum {string}
*/
export enum RespListMeasurementsStatusEnum {
    Success = 'success'
}

export function RespListMeasurementsFromJSON(json: any): RespListMeasurements {
    return RespListMeasurementsFromJSONTyped(json, false);
}

export function RespListMeasurementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListMeasurements {
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

export function RespListMeasurementsToJSON(value?: RespListMeasurements | null): any {
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


