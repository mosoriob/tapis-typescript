/* tslint:disable */
/* eslint-disable */
/**
 * Authenticator
 * REST API and web server providing authentication for a Tapis v3 instance.
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
 * @interface BasicResponse
 */
export interface BasicResponse {
    /**
     * Version of the API
     * @type {string}
     * @memberof BasicResponse
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof BasicResponse
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof BasicResponse
     */
    status?: BasicResponseStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum BasicResponseStatusEnum {
    Success = 'success',
    Failure = 'failure'
}

export function BasicResponseFromJSON(json: any): BasicResponse {
    return BasicResponseFromJSONTyped(json, false);
}

export function BasicResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function BasicResponseToJSON(value?: BasicResponse | null): any {
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
    };
}

