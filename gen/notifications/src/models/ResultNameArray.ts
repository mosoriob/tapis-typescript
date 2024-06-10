/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Notifications API
 * The Tapis Notifications API provides for management of subscriptions and event publication
 *
 * The version of the OpenAPI document: 1.6.1
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
 * @interface ResultNameArray
 */
export interface ResultNameArray {
    /**
     * 
     * @type {Array<string>}
     * @memberof ResultNameArray
     */
    names?: Array<string>;
}

export function ResultNameArrayFromJSON(json: any): ResultNameArray {
    return ResultNameArrayFromJSONTyped(json, false);
}

export function ResultNameArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultNameArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'names': !exists(json, 'names') ? undefined : json['names'],
    };
}

export function ResultNameArrayToJSON(value?: ResultNameArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'names': value.names,
    };
}
