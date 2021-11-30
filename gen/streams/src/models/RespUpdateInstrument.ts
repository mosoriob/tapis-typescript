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
    Instrument,
    InstrumentFromJSON,
    InstrumentFromJSONTyped,
    InstrumentToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespUpdateInstrument
 */
export interface RespUpdateInstrument {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdateInstrument
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdateInstrument
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdateInstrument
     */
    status?: RespUpdateInstrumentStatusEnum;
    /**
     * 
     * @type {Array<Instrument>}
     * @memberof RespUpdateInstrument
     */
    result?: Array<Instrument>;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdateInstrumentStatusEnum {
    Success = 'success'
}

export function RespUpdateInstrumentFromJSON(json: any): RespUpdateInstrument {
    return RespUpdateInstrumentFromJSONTyped(json, false);
}

export function RespUpdateInstrumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdateInstrument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(InstrumentFromJSON)),
    };
}

export function RespUpdateInstrumentToJSON(value?: RespUpdateInstrument | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(InstrumentToJSON)),
    };
}

