/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.3.3
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqPostChildSystem,
    ReqPostChildSystemFromJSON,
    ReqPostChildSystemToJSON,
    ReqUnlinkChildren,
    ReqUnlinkChildrenFromJSON,
    ReqUnlinkChildrenToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespChangeCount,
    RespChangeCountFromJSON,
    RespChangeCountToJSON,
    RespResourceUrl,
    RespResourceUrlFromJSON,
    RespResourceUrlToJSON,
} from '../models';

export interface CreateChildSystemRequest {
    parentId: string;
    reqPostChildSystem: ReqPostChildSystem;
}

export interface UnlinkChildrenRequest {
    parentSystemId: string;
    all?: boolean;
    reqUnlinkChildren?: ReqUnlinkChildren;
}

export interface UnlinkFromParentRequest {
    childSystemId: string;
}

/**
 * 
 */
export class ChildSystemsApi extends runtime.BaseAPI {

    /**
     * Create a child system.  The child system gets all of it\'s attributes from it\'s parent except for the following fields:   - *id*   - *effectiveUserId*   - *rootDir*   - *owner*  The owner will be the user who is creating the system.  The caller must have read permission to the parent system. 
     */
    async createChildSystemRaw(requestParameters: CreateChildSystemRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespResourceUrl>> {
        if (requestParameters.parentId === null || requestParameters.parentId === undefined) {
            throw new runtime.RequiredError('parentId','Required parameter requestParameters.parentId was null or undefined when calling createChildSystem.');
        }

        if (requestParameters.reqPostChildSystem === null || requestParameters.reqPostChildSystem === undefined) {
            throw new runtime.RequiredError('reqPostChildSystem','Required parameter requestParameters.reqPostChildSystem was null or undefined when calling createChildSystem.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{parentId}/createChildSystem`.replace(`{${"parentId"}}`, encodeURIComponent(String(requestParameters.parentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqPostChildSystemToJSON(requestParameters.reqPostChildSystem),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespResourceUrlFromJSON(jsonValue));
    }

    /**
     * Create a child system.  The child system gets all of it\'s attributes from it\'s parent except for the following fields:   - *id*   - *effectiveUserId*   - *rootDir*   - *owner*  The owner will be the user who is creating the system.  The caller must have read permission to the parent system. 
     */
    async createChildSystem(requestParameters: CreateChildSystemRequest, initOverrides?: RequestInit): Promise<RespResourceUrl> {
        const response = await this.createChildSystemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Make a child system a standalone system.  This will break the connection with it\'s parent, and from this point on, the child system will not be connected to the parent.  This is similar to unlinkFromParent, but permissions are required for the parent system rather than the child system.  Warning, this cannot be undone. 
     */
    async unlinkChildrenRaw(requestParameters: UnlinkChildrenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.parentSystemId === null || requestParameters.parentSystemId === undefined) {
            throw new runtime.RequiredError('parentSystemId','Required parameter requestParameters.parentSystemId was null or undefined when calling unlinkChildren.');
        }

        const queryParameters: any = {};

        if (requestParameters.all !== undefined) {
            queryParameters['all'] = requestParameters.all;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{parentSystemId}/unlinkChildren`.replace(`{${"parentSystemId"}}`, encodeURIComponent(String(requestParameters.parentSystemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqUnlinkChildrenToJSON(requestParameters.reqUnlinkChildren),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Make a child system a standalone system.  This will break the connection with it\'s parent, and from this point on, the child system will not be connected to the parent.  This is similar to unlinkFromParent, but permissions are required for the parent system rather than the child system.  Warning, this cannot be undone. 
     */
    async unlinkChildren(requestParameters: UnlinkChildrenRequest, initOverrides?: RequestInit): Promise<RespChangeCount> {
        const response = await this.unlinkChildrenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Make a child system a standalone system.  This will break the connection with it\'s parent, and from this point on, the child system will not be connected to the parent.  Warning, this cannot be undone. 
     */
    async unlinkFromParentRaw(requestParameters: UnlinkFromParentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespChangeCount>> {
        if (requestParameters.childSystemId === null || requestParameters.childSystemId === undefined) {
            throw new runtime.RequiredError('childSystemId','Required parameter requestParameters.childSystemId was null or undefined when calling unlinkFromParent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/{childSystemId}/unlinkFromParent`.replace(`{${"childSystemId"}}`, encodeURIComponent(String(requestParameters.childSystemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespChangeCountFromJSON(jsonValue));
    }

    /**
     * Make a child system a standalone system.  This will break the connection with it\'s parent, and from this point on, the child system will not be connected to the parent.  Warning, this cannot be undone. 
     */
    async unlinkFromParent(requestParameters: UnlinkFromParentRequest, initOverrides?: RequestInit): Promise<RespChangeCount> {
        const response = await this.unlinkFromParentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
