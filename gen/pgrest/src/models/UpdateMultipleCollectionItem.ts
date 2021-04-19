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
import {
    UpdateMultipleCollectionItemWhere,
    UpdateMultipleCollectionItemWhereFromJSON,
    UpdateMultipleCollectionItemWhereFromJSONTyped,
    UpdateMultipleCollectionItemWhereToJSON,
} from './';

/**
 * Update multiple rows in the same way atomically, where the set of rows to be updated is described with a "where" clause and the update to be performed is defined by a JSON object of column names and column values (the new values to apply to all records).
 * @export
 * @interface UpdateMultipleCollectionItem
 */
export interface UpdateMultipleCollectionItem {
    [key: string]: object | any;
    /**
     * 
     * @type {UpdateMultipleCollectionItemWhere}
     * @memberof UpdateMultipleCollectionItem
     */
    where: UpdateMultipleCollectionItemWhere;
}

export function UpdateMultipleCollectionItemFromJSON(json: any): UpdateMultipleCollectionItem {
    return UpdateMultipleCollectionItemFromJSONTyped(json, false);
}

export function UpdateMultipleCollectionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateMultipleCollectionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        'where': UpdateMultipleCollectionItemWhereFromJSON(json['where']),
    };
}

export function UpdateMultipleCollectionItemToJSON(value?: UpdateMultipleCollectionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'where': UpdateMultipleCollectionItemWhereToJSON(value.where),
    };
}


