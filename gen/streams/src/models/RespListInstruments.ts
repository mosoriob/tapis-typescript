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
 * @interface RespListInstruments
 */
export interface RespListInstruments {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespListInstruments
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespListInstruments
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespListInstruments
     */
    status?: RespListInstrumentsStatusEnum;
    /**
     * 
     * @type {Array<Instrument>}
     * @memberof RespListInstruments
     */
    result?: Array<Instrument>;
}

/**
* @export
* @enum {string}
*/
export enum RespListInstrumentsStatusEnum {
    Success = 'success'
}

export function RespListInstrumentsFromJSON(json: any): RespListInstruments {
    return RespListInstrumentsFromJSONTyped(json, false);
}

export function RespListInstrumentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespListInstruments {
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

export function RespListInstrumentsToJSON(value?: RespListInstruments | null): any {
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


