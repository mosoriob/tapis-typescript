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
    Template,
    TemplateFromJSON,
    TemplateFromJSONTyped,
    TemplateToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespGetTemplate
 */
export interface RespGetTemplate {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespGetTemplate
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespGetTemplate
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespGetTemplate
     */
    status?: RespGetTemplateStatusEnum;
    /**
     * 
     * @type {Array<Template>}
     * @memberof RespGetTemplate
     */
    result?: Array<Template>;
}

/**
* @export
* @enum {string}
*/
export enum RespGetTemplateStatusEnum {
    Success = 'success'
}

export function RespGetTemplateFromJSON(json: any): RespGetTemplate {
    return RespGetTemplateFromJSONTyped(json, false);
}

export function RespGetTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespGetTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(TemplateFromJSON)),
    };
}

export function RespGetTemplateToJSON(value?: RespGetTemplate | null): any {
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
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(TemplateToJSON)),
    };
}

