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
 * A description of the columns of the table, in key/value pair format. Each key corresponds to a single collumn; the name of the key is the name of the column, and the value of the key decribes the type of the column and any additional validation information.
 * @export
 * @interface Columns
 */
export interface Columns {
    [key: string]: object | any;
    /**
     * Whether the column can contain null values.
     * @type {boolean}
     * @memberof Columns
     */
    _null?: boolean;
    /**
     * The Postgres type of the column, such as "integer", "varchar", etc.
     * @type {string}
     * @memberof Columns
     */
    data_type: string;
    /**
     * For columns of type "varchar", the max length of the column.
     * @type {number}
     * @memberof Columns
     */
    char_len?: number;
}

export function ColumnsFromJSON(json: any): Columns {
    return ColumnsFromJSONTyped(json, false);
}

export function ColumnsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Columns {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        '_null': !exists(json, 'null') ? undefined : json['null'],
        'data_type': json['data_type'],
        'char_len': !exists(json, 'char_len') ? undefined : json['char_len'],
    };
}

export function ColumnsToJSON(value?: Columns | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        'null': value._null,
        'data_type': value.data_type,
        'char_len': value.char_len,
    };
}


