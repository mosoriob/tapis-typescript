/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    BaseResp,
    BaseRespFromJSON,
    BaseRespToJSON,
} from '../models';

/**
 * 
 */
export class GeneralApi extends runtime.BaseAPI {

    /**
     * Health check.
     */
    async healthCheckRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<BaseResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseRespFromJSON(jsonValue));
    }

    /**
     * Health check.
     */
    async healthCheck(initOverrides?: RequestInit): Promise<BaseResp> {
        const response = await this.healthCheckRaw(initOverrides);
        return await response.value();
    }

}
