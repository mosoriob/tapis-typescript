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


import * as runtime from '../runtime';
import {
    ReqCreateClient,
    ReqCreateClientFromJSON,
    ReqCreateClientToJSON,
    RespCreateClient,
    RespCreateClientFromJSON,
    RespCreateClientToJSON,
    RespDeleteClient,
    RespDeleteClientFromJSON,
    RespDeleteClientToJSON,
    RespGetClient,
    RespGetClientFromJSON,
    RespGetClientToJSON,
    RespListClients,
    RespListClientsFromJSON,
    RespListClientsToJSON,
} from '../models';

export interface CreateClientRequest {
    reqCreateClient: ReqCreateClient;
}

export interface DeleteClientRequest {
    clientId: string;
}

export interface GetClientRequest {
    clientId: string;
}

export interface ListClientsRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class ClientsApi extends runtime.BaseAPI {

    /**
     */
    async createClientRaw(requestParameters: CreateClientRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCreateClient>> {
        if (requestParameters.reqCreateClient === null || requestParameters.reqCreateClient === undefined) {
            throw new runtime.RequiredError('reqCreateClient','Required parameter requestParameters.reqCreateClient was null or undefined when calling createClient.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/oauth2/clients`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateClientToJSON(requestParameters.reqCreateClient),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateClientFromJSON(jsonValue));
    }

    /**
     */
    async createClient(requestParameters: CreateClientRequest, initOverrides?: RequestInit): Promise<RespCreateClient> {
        const response = await this.createClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permenantly delete a client.
     * Delete a tenant
     */
    async deleteClientRaw(requestParameters: DeleteClientRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespDeleteClient>> {
        if (requestParameters.clientId === null || requestParameters.clientId === undefined) {
            throw new runtime.RequiredError('clientId','Required parameter requestParameters.clientId was null or undefined when calling deleteClient.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/oauth2/clients/{client_id}`.replace(`{${"client_id"}}`, encodeURIComponent(String(requestParameters.clientId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteClientFromJSON(jsonValue));
    }

    /**
     * Permenantly delete a client.
     * Delete a tenant
     */
    async deleteClient(requestParameters: DeleteClientRequest, initOverrides?: RequestInit): Promise<RespDeleteClient> {
        const response = await this.deleteClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get details of a specific client by its id.
     * Get client details
     */
    async getClientRaw(requestParameters: GetClientRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGetClient>> {
        if (requestParameters.clientId === null || requestParameters.clientId === undefined) {
            throw new runtime.RequiredError('clientId','Required parameter requestParameters.clientId was null or undefined when calling getClient.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/oauth2/clients/{client_id}`.replace(`{${"client_id"}}`, encodeURIComponent(String(requestParameters.clientId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetClientFromJSON(jsonValue));
    }

    /**
     * Get details of a specific client by its id.
     * Get client details
     */
    async getClient(requestParameters: GetClientRequest, initOverrides?: RequestInit): Promise<RespGetClient> {
        const response = await this.getClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listClientsRaw(requestParameters: ListClientsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespListClients>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/oauth2/clients`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListClientsFromJSON(jsonValue));
    }

    /**
     */
    async listClients(requestParameters: ListClientsRequest, initOverrides?: RequestInit): Promise<RespListClients> {
        const response = await this.listClientsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
