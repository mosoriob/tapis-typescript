/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pgrest API
 * The Tapis Pgrest API provides a RESTful interface to a manged SQL-db-as-a-service.
 *
 * The version of the OpenAPI document: 0.1
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
 * @interface ReqCreateInCollection
 */
export interface ReqCreateInCollection {
    /**
     * The values of the row to add.
     * @type {object}
     * @memberof ReqCreateInCollection
     */
    data?: object;
}

export function ReqCreateInCollectionFromJSON(json: any): ReqCreateInCollection {
    return ReqCreateInCollectionFromJSONTyped(json, false);
}

export function ReqCreateInCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateInCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ReqCreateInCollectionToJSON(value?: ReqCreateInCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
    };
}


