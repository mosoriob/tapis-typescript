/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.1.0
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
 * @interface KeyValuePair
 */
export interface KeyValuePair {
    /**
     * 
     * @type {string}
     * @memberof KeyValuePair
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof KeyValuePair
     */
    value?: string;
}

export function KeyValuePairFromJSON(json: any): KeyValuePair {
    return KeyValuePairFromJSONTyped(json, false);
}

export function KeyValuePairFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyValuePair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function KeyValuePairToJSON(value?: KeyValuePair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}

