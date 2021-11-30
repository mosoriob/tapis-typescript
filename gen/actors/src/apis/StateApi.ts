/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
    RespGetState,
    RespGetStateFromJSON,
    RespGetStateToJSON,
    RespUpdateState,
    RespUpdateStateFromJSON,
    RespUpdateStateToJSON,
} from '../models';

export interface GetStateRequest {
    actorId: string;
}

export interface UpdateStateRequest {
    actorId: string;
    body: object;
}

/**
 * 
 */
export class StateApi extends runtime.BaseAPI {

    /**
     * Get state for an actor.
     * getState
     */
    async getStateRaw(requestParameters: GetStateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespGetState>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling getState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/state`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespGetStateFromJSON(jsonValue));
    }

    /**
     * Get state for an actor.
     * getState
     */
    async getState(requestParameters: GetStateRequest, initOverrides?: RequestInit): Promise<RespGetState> {
        const response = await this.getStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update state for an actor.
     * updateState
     */
    async updateStateRaw(requestParameters: UpdateStateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespUpdateState>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling updateState.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateState.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors/{actor_id}/state`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespUpdateStateFromJSON(jsonValue));
    }

    /**
     * Update state for an actor.
     * updateState
     */
    async updateState(requestParameters: UpdateStateRequest, initOverrides?: RequestInit): Promise<RespUpdateState> {
        const response = await this.updateStateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
