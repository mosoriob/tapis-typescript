/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
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
    BasicResponse,
    BasicResponseFromJSON,
    BasicResponseToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ReqCreateChannel,
    ReqCreateChannelFromJSON,
    ReqCreateChannelToJSON,
    UpdateChannelStatus,
    UpdateChannelStatusFromJSON,
    UpdateChannelStatusToJSON,
} from '../models';

export interface CreateChannelsRequest {
    reqCreateChannel: ReqCreateChannel;
}

export interface DeleteChannelRequest {
    channelId: string;
}

export interface GetChannelRequest {
    channelId: string;
}

export interface ListAlertsRequest {
    channelId: string;
}

export interface ListChannelsRequest {
    query?: string;
    limit?: number;
    offset?: number;
}

export interface UpdateChannelRequest {
    channelId: string;
    reqCreateChannel: ReqCreateChannel;
}

export interface UpdateStatusRequest {
    channelId: string;
    updateChannelStatus: UpdateChannelStatus;
}

/**
 * 
 */
export class ChannelsApi extends runtime.BaseAPI {

    /**
     * Create channels.
     * Create channels.
     */
    async createChannelsRaw(requestParameters: CreateChannelsRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.reqCreateChannel === null || requestParameters.reqCreateChannel === undefined) {
            throw new runtime.RequiredError('reqCreateChannel','Required parameter requestParameters.reqCreateChannel was null or undefined when calling createChannels.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/channels`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateChannelToJSON(requestParameters.reqCreateChannel),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Create channels.
     * Create channels.
     */
    async createChannels(requestParameters: CreateChannelsRequest): Promise<BasicResponse> {
        const response = await this.createChannelsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete a channel
     * Delete a channel
     */
    async deleteChannelRaw(requestParameters: DeleteChannelRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling deleteChannel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/channels/{channel_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Delete a channel
     * Delete a channel
     */
    async deleteChannel(requestParameters: DeleteChannelRequest): Promise<BasicResponse> {
        const response = await this.deleteChannelRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific channel by its id
     * Get channels details
     */
    async getChannelRaw(requestParameters: GetChannelRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling getChannel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/channels/{channel_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Get details of a specific channel by its id
     * Get channels details
     */
    async getChannel(requestParameters: GetChannelRequest): Promise<BasicResponse> {
        const response = await this.getChannelRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details of a specific channel by its id
     * List alerts for given channel id
     */
    async listAlertsRaw(requestParameters: ListAlertsRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling listAlerts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/channels/{channel_id}/alerts`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Get details of a specific channel by its id
     * List alerts for given channel id
     */
    async listAlerts(requestParameters: ListAlertsRequest): Promise<BasicResponse> {
        const response = await this.listAlertsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List channels.
     * List channels.
     */
    async listChannelsRaw(requestParameters: ListChannelsRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/streams/channels`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * List channels.
     * List channels.
     */
    async listChannels(requestParameters: ListChannelsRequest): Promise<BasicResponse> {
        const response = await this.listChannelsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update a channel
     * Update a channel
     */
    async updateChannelRaw(requestParameters: UpdateChannelRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling updateChannel.');
        }

        if (requestParameters.reqCreateChannel === null || requestParameters.reqCreateChannel === undefined) {
            throw new runtime.RequiredError('reqCreateChannel','Required parameter requestParameters.reqCreateChannel was null or undefined when calling updateChannel.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/channels/{channel_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateChannelToJSON(requestParameters.reqCreateChannel),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Update a channel
     * Update a channel
     */
    async updateChannel(requestParameters: UpdateChannelRequest): Promise<BasicResponse> {
        const response = await this.updateChannelRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update channel status
     * Update channel status
     */
    async updateStatusRaw(requestParameters: UpdateStatusRequest): Promise<runtime.ApiResponse<BasicResponse>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling updateStatus.');
        }

        if (requestParameters.updateChannelStatus === null || requestParameters.updateChannelStatus === undefined) {
            throw new runtime.RequiredError('updateChannelStatus','Required parameter requestParameters.updateChannelStatus was null or undefined when calling updateStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/streams/channels/{channel_id}`.replace(`{${"channel_id"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateChannelStatusToJSON(requestParameters.updateChannelStatus),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BasicResponseFromJSON(jsonValue));
    }

    /**
     * Update channel status
     * Update channel status
     */
    async updateStatus(requestParameters: UpdateStatusRequest): Promise<BasicResponse> {
        const response = await this.updateStatusRaw(requestParameters);
        return await response.value();
    }

}
