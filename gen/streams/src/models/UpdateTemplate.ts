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
 * @interface UpdateTemplate
 */
export interface UpdateTemplate {
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof UpdateTemplate
     */
    status?: UpdateTemplateStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum UpdateTemplateStatusEnum {
    Inactive = 'INACTIVE',
    Active = 'ACTIVE'
}

export function UpdateTemplateFromJSON(json: any): UpdateTemplate {
    return UpdateTemplateFromJSONTyped(json, false);
}

export function UpdateTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function UpdateTemplateToJSON(value?: UpdateTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}


