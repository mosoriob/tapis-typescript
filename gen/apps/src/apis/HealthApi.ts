/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
} from '../models';

/**
 * 
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * Health check.
     */
    async healthCheckRaw(): Promise<runtime.ApiResponse<RespBasic>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Health check.
     */
    async healthCheck(): Promise<RespBasic> {
        const response = await this.healthCheckRaw();
        return await response.value();
    }

    /**
     * Ready check.
     */
    async readyCheckRaw(): Promise<runtime.ApiResponse<RespBasic>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/apps/readycheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Ready check.
     */
    async readyCheck(): Promise<RespBasic> {
        const response = await this.readyCheckRaw();
        return await response.value();
    }

}