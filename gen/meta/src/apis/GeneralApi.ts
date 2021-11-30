/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Meta V3 API
 * The Tapis Meta API provides access to a MongoDB database. A standalone service which connects to a MongoDB database and immediately exposes all of MongoDB’s capabilities through a complete REST API, which allows the user to read and write JSON messages and binary data via HTTP.
 *
 * The version of the OpenAPI document: 0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

/**
 * 
 */
export class GeneralApi extends runtime.BaseAPI {

    /**
     * Health check for liveness. No authorization required.
     */
    async healthCheckRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/meta/healthCheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Health check for liveness. No authorization required.
     */
    async healthCheck(initOverrides?: RequestInit): Promise<object> {
        const response = await this.healthCheckRaw(initOverrides);
        return await response.value();
    }

}
