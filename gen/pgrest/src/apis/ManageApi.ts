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


import * as runtime from '../runtime';
import {
    ReqCreateTable,
    ReqCreateTableFromJSON,
    ReqCreateTableToJSON,
    RespCreateTable,
    RespCreateTableFromJSON,
    RespCreateTableToJSON,
    RespDeleteTable,
    RespDeleteTableFromJSON,
    RespDeleteTableToJSON,
    RespGetTable,
    RespGetTableFromJSON,
    RespGetTableToJSON,
    RespListTables,
    RespListTablesFromJSON,
    RespListTablesToJSON,
} from '../models';

export interface CreateTableRequest {
    reqCreateTable: ReqCreateTable;
}

export interface DeleteTableRequest {
    tableId: string;
}

export interface GetTableRequest {
    tableId: string;
    details?: boolean;
}

export interface ListTablesRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class ManageApi extends runtime.BaseAPI {

    /**
     * Create a table.
     * Create a tale.
     */
    async createTableRaw(requestParameters: CreateTableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCreateTable>> {
        if (requestParameters.reqCreateTable === null || requestParameters.reqCreateTable === undefined) {
            throw new runtime.RequiredError('reqCreateTable','Required parameter requestParameters.reqCreateTable was null or undefined when calling createTable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pgrest/manage/tables`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateTableToJSON(requestParameters.reqCreateTable),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateTableFromJSON(jsonValue));
    }

    /**
     * Create a table.
     * Create a tale.
     */
    async createTable(requestParameters: CreateTableRequest, initOverrides?: RequestInit): Promise<RespCreateTable> {
        const response = await this.createTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific table and all associted data. WARNING -- this action cannot be undone.
     * Delete a specific table and all associted data.
     */
    async deleteTableRaw(requestParameters: DeleteTableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespDeleteTable>> {
        if (requestParameters.tableId === null || requestParameters.tableId === undefined) {
            throw new runtime.RequiredError('tableId','Required parameter requestParameters.tableId was null or undefined when calling deleteTable.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pgrest/manage/tables/{table_id}`.replace(`{${"table_id"}}`, encodeURIComponent(String(requestParameters.tableId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteTableFromJSON(jsonValue));
    }

    /**
     * Delete a specific table and all associted data. WARNING -- this action cannot be undone.
     * Delete a specific table and all associted data.
     */
    async deleteTable(requestParameters: DeleteTableRequest, initOverrides?: RequestInit): Promise<RespDeleteTable> {
        const response = await this.deleteTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get details of a specific table.
     * Get details of a specific table.
     */
    async getTableRaw(requestParameters: GetTableRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGetTable>> {
        if (requestParameters.tableId === null || requestParameters.tableId === undefined) {
            throw new runtime.RequiredError('tableId','Required parameter requestParameters.tableId was null or undefined when calling getTable.');
        }

        const queryParameters: any = {};

        if (requestParameters.details !== undefined) {
            queryParameters['details'] = requestParameters.details;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pgrest/manage/tables/{table_id}`.replace(`{${"table_id"}}`, encodeURIComponent(String(requestParameters.tableId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetTableFromJSON(jsonValue));
    }

    /**
     * Get details of a specific table.
     * Get details of a specific table.
     */
    async getTable(requestParameters: GetTableRequest, initOverrides?: RequestInit): Promise<RespGetTable> {
        const response = await this.getTableRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List tables in the tenant\'s schema.
     * List tables.
     */
    async listTablesRaw(requestParameters: ListTablesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespListTables>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pgrest/manage/tables`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListTablesFromJSON(jsonValue));
    }

    /**
     * List tables in the tenant\'s schema.
     * List tables.
     */
    async listTables(requestParameters: ListTablesRequest, initOverrides?: RequestInit): Promise<RespListTables> {
        const response = await this.listTablesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
