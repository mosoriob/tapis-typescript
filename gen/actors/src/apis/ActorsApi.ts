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
    ReqCreateActor,
    ReqCreateActorFromJSON,
    ReqCreateActorToJSON,
    RespCreateActor,
    RespCreateActorFromJSON,
    RespCreateActorToJSON,
    RespDeleteActor,
    RespDeleteActorFromJSON,
    RespDeleteActorToJSON,
    RespListActors,
    RespListActorsFromJSON,
    RespListActorsToJSON,
} from '../models';

export interface CreateActorRequest {
    reqCreateActor: ReqCreateActor;
}

export interface DeleteActorRequest {
    actorId: string;
}

export interface GetActorRequest {
    actorId: string;
}

export interface ListActorsRequest {
    limit?: number;
    offset?: number;
}

export interface UpdateActorRequest {
    actorId: string;
    reqCreateActor: ReqCreateActor;
}

/**
 * 
 */
export class ActorsApi extends runtime.BaseAPI {

    /**
     * Register an actor
     * createActor
     */
    async createActorRaw(requestParameters: CreateActorRequest): Promise<runtime.ApiResponse<RespCreateActor>> {
        if (requestParameters.reqCreateActor === null || requestParameters.reqCreateActor === undefined) {
            throw new runtime.RequiredError('reqCreateActor','Required parameter requestParameters.reqCreateActor was null or undefined when calling createActor.');
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
            path: `/v3/actors`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateActorToJSON(requestParameters.reqCreateActor),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCreateActorFromJSON(jsonValue));
    }

    /**
     * Register an actor
     * createActor
     */
    async createActor(requestParameters: CreateActorRequest): Promise<RespCreateActor> {
        const response = await this.createActorRaw(requestParameters);
        return await response.value();
    }

    /**
     * Permenantly delete an actor.
     * deleteActor
     */
    async deleteActorRaw(requestParameters: DeleteActorRequest): Promise<runtime.ApiResponse<RespDeleteActor>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling deleteActor.');
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
            path: `/v3/actors/{actor_id}`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespDeleteActorFromJSON(jsonValue));
    }

    /**
     * Permenantly delete an actor.
     * deleteActor
     */
    async deleteActor(requestParameters: DeleteActorRequest): Promise<RespDeleteActor> {
        const response = await this.deleteActorRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific actor by its id.
     * getActor
     */
    async getActorRaw(requestParameters: GetActorRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling getActor.');
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
            path: `/v3/actors/{actor_id}`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get details of a specific actor by its id.
     * getActor
     */
    async getActor(requestParameters: GetActorRequest): Promise<object> {
        const response = await this.getActorRaw(requestParameters);
        return await response.value();
    }

    /**
     * List summary of all actors owned by user
     * listActors
     */
    async listActorsRaw(requestParameters: ListActorsRequest): Promise<runtime.ApiResponse<RespListActors>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x-nonce"] = this.configuration.apiKey("x-nonce"); // nonce authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-JWT-Assertion-DEV"] = this.configuration.apiKey("X-JWT-Assertion-DEV"); // wso2jwtDevAuth authentication
        }

        const response = await this.request({
            path: `/v3/actors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RespListActorsFromJSON(jsonValue));
    }

    /**
     * List summary of all actors owned by user
     * listActors
     */
    async listActors(requestParameters: ListActorsRequest): Promise<RespListActors> {
        const response = await this.listActorsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an actor\'s definition.
     * updateActor
     */
    async updateActorRaw(requestParameters: UpdateActorRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.actorId === null || requestParameters.actorId === undefined) {
            throw new runtime.RequiredError('actorId','Required parameter requestParameters.actorId was null or undefined when calling updateActor.');
        }

        if (requestParameters.reqCreateActor === null || requestParameters.reqCreateActor === undefined) {
            throw new runtime.RequiredError('reqCreateActor','Required parameter requestParameters.reqCreateActor was null or undefined when calling updateActor.');
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
            path: `/v3/actors/{actor_id}`.replace(`{${"actor_id"}}`, encodeURIComponent(String(requestParameters.actorId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateActorToJSON(requestParameters.reqCreateActor),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update an actor\'s definition.
     * updateActor
     */
    async updateActor(requestParameters: UpdateActorRequest): Promise<object> {
        const response = await this.updateActorRaw(requestParameters);
        return await response.value();
    }

}