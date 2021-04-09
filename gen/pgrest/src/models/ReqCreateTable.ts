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
    Columns,
    ColumnsFromJSON,
    ColumnsFromJSONTyped,
    ColumnsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqCreateTable
 */
export interface ReqCreateTable {
    /**
     * The name to be used for the table.
     * @type {string}
     * @memberof ReqCreateTable
     */
    table_name: string;
    /**
     * The url path to use for the root collection associated with the records in the table.
     * @type {string}
     * @memberof ReqCreateTable
     */
    root_url: string;
    /**
     * 
     * @type {Columns}
     * @memberof ReqCreateTable
     */
    columns: Columns;
    /**
     * Whether the "created" endpoint (HTTP verb "POST") for creating new rows is available.
     * @type {boolean}
     * @memberof ReqCreateTable
     */
    create?: boolean;
    /**
     * Whether the "delete" endpoint (HTTP verb "delete") for deleting a specific row is available.
     * @type {boolean}
     * @memberof ReqCreateTable
     */
    _delete?: boolean;
    /**
     * Whether the "list all" endpoint (HTTP verb "GET") for listing all rows in the table is available.
     * @type {boolean}
     * @memberof ReqCreateTable
     */
    list_all?: boolean;
    /**
     * Whether the "get row" endpoint (HTTP verb "GET") for retrieving a specifc row in the table is available.
     * @type {boolean}
     * @memberof ReqCreateTable
     */
    list_single?: boolean;
    /**
     * Whether the "update" endpoint (HTTP verb "PUT") for updating a specific row is available.
     * @type {boolean}
     * @memberof ReqCreateTable
     */
    update?: boolean;
}

export function ReqCreateTableFromJSON(json: any): ReqCreateTable {
    return ReqCreateTableFromJSONTyped(json, false);
}

export function ReqCreateTableFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateTable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'table_name': json['table_name'],
        'root_url': json['root_url'],
        'columns': ColumnsFromJSON(json['columns']),
        'create': !exists(json, 'create') ? undefined : json['create'],
        '_delete': !exists(json, 'delete') ? undefined : json['delete'],
        'list_all': !exists(json, 'list_all') ? undefined : json['list_all'],
        'list_single': !exists(json, 'list_single') ? undefined : json['list_single'],
        'update': !exists(json, 'update') ? undefined : json['update'],
    };
}

export function ReqCreateTableToJSON(value?: ReqCreateTable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'table_name': value.table_name,
        'root_url': value.root_url,
        'columns': ColumnsToJSON(value.columns),
        'create': value.create,
        'delete': value._delete,
        'list_all': value.list_all,
        'list_single': value.list_single,
        'update': value.update,
    };
}


