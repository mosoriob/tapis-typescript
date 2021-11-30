/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreatePermissionRequest,
    CreatePermissionRequestFromJSON,
    CreatePermissionRequestToJSON,
    FilePermissionResponse,
    FilePermissionResponseFromJSON,
    FilePermissionResponseToJSON,
    StringResponse,
    StringResponseFromJSON,
    StringResponseToJSON,
} from '../models';

export interface DeletePermissionsRequest {
    systemId: string;
    path: string;
    username: string;
}

export interface GetPermissionsRequest {
    systemId: string;
    path: string;
    username?: string;
}

export interface GrantPermissionsRequest {
    systemId: string;
    path: string;
    createPermissionRequest: CreatePermissionRequest;
}

/**
 * 
 */
export class PermissionsApi extends runtime.BaseAPI {

    /**
     * Revoke access to a file or folder for a user.
     * Revoke user permission on a file or folder. 
     */
    async deletePermissionsRaw(requestParameters: DeletePermissionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<StringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling deletePermissions.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling deletePermissions.');
        }

        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deletePermissions.');
        }

        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/permissions/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StringResponseFromJSON(jsonValue));
    }

    /**
     * Revoke access to a file or folder for a user.
     * Revoke user permission on a file or folder. 
     */
    async deletePermissions(requestParameters: DeletePermissionsRequest, initOverrides?: RequestInit): Promise<StringResponse> {
        const response = await this.deletePermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the permission for the API user for the system and path.
     * Get the API user\'s permission on a file or folder.
     */
    async getPermissionsRaw(requestParameters: GetPermissionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FilePermissionResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getPermissions.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling getPermissions.');
        }

        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/permissions/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FilePermissionResponseFromJSON(jsonValue));
    }

    /**
     * Get the permission for the API user for the system and path.
     * Get the API user\'s permission on a file or folder.
     */
    async getPermissions(requestParameters: GetPermissionsRequest, initOverrides?: RequestInit): Promise<FilePermissionResponse> {
        const response = await this.getPermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Grant access to a file or folder for a user. Access may be READ or MODIFY. MODIFY implies READ.
     * Grant user permission on a file or folder. 
     */
    async grantPermissionsRaw(requestParameters: GrantPermissionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FilePermissionResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling grantPermissions.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling grantPermissions.');
        }

        if (requestParameters.createPermissionRequest === null || requestParameters.createPermissionRequest === undefined) {
            throw new runtime.RequiredError('createPermissionRequest','Required parameter requestParameters.createPermissionRequest was null or undefined when calling grantPermissions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/files/permissions/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePermissionRequestToJSON(requestParameters.createPermissionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FilePermissionResponseFromJSON(jsonValue));
    }

    /**
     * Grant access to a file or folder for a user. Access may be READ or MODIFY. MODIFY implies READ.
     * Grant user permission on a file or folder. 
     */
    async grantPermissions(requestParameters: GrantPermissionsRequest, initOverrides?: RequestInit): Promise<FilePermissionResponse> {
        const response = await this.grantPermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
