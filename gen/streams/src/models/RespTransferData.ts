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
    Transfer,
    TransferFromJSON,
    TransferFromJSONTyped,
    TransferToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespTransferData
 */
export interface RespTransferData {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespTransferData
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespTransferData
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespTransferData
     */
    status?: RespTransferDataStatusEnum;
    /**
     * 
     * @type {Array<Transfer>}
     * @memberof RespTransferData
     */
    result?: Array<Transfer>;
}

/**
* @export
* @enum {string}
*/
export enum RespTransferDataStatusEnum {
    Success = 'success'
}

export function RespTransferDataFromJSON(json: any): RespTransferData {
    return RespTransferDataFromJSONTyped(json, false);
}

export function RespTransferDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespTransferData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(TransferFromJSON)),
    };
}

export function RespTransferDataToJSON(value?: RespTransferData | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(TransferToJSON)),
    };
}
