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
    RespgetState,
    RespgetStateFromJSON,
    RespgetStateToJSON,
    RespupdateState,
    RespupdateStateFromJSON,
    RespupdateStateToJSON,
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
    async getStateRaw(requestParameters: GetStateRequest): Promise<runtime.ApiResponse<RespgetState>> {
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
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespgetStateFromJSON(jsonValue));
    }

    /**
     * Get state for an actor.
     * getState
     */
    async getState(requestParameters: GetStateRequest): Promise<RespgetState> {
        const response = await this.getStateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update state for an actor.
     * updateState
     */
    async updateStateRaw(requestParameters: UpdateStateRequest): Promise<runtime.ApiResponse<RespupdateState>> {
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
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespupdateStateFromJSON(jsonValue));
    }

    /**
     * Update state for an actor.
     * updateState
     */
    async updateState(requestParameters: UpdateStateRequest): Promise<RespupdateState> {
        const response = await this.updateStateRaw(requestParameters);
        return await response.value();
    }

}
