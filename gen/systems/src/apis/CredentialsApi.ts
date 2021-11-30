/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.0.0-rc1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ReqCreateCredential,
    ReqCreateCredentialFromJSON,
    ReqCreateCredentialToJSON,
    RespBasic,
    RespBasicFromJSON,
    RespBasicToJSON,
    RespCredential,
    RespCredentialFromJSON,
    RespCredentialToJSON,
} from '../models';

export interface CreateUserCredentialRequest {
    systemId: string;
    userName: string;
    reqCreateCredential: ReqCreateCredential;
    skipCredentialCheck?: boolean;
}

export interface GetUserCredentialRequest {
    systemId: string;
    userName: string;
    authnMethod?: string;
}

export interface RemoveUserCredentialRequest {
    systemId: string;
    userName: string;
}

/**
 * 
 */
export class CredentialsApi extends runtime.BaseAPI {

    /**
     * Create or update credentials in the Security Kernel for given system and *target user* using a request body. Requester must be owner of the system. Credentials for multiple authentication methods may be provided.  Note that user making the request and *target user* may be different and frequently are different.  By default any credentials provided for LINUX type systems are verified. Use query parameter skipCredentialCheck=true to bypass initial verification of credentials.  Note that the attribute authnMethod is allowed but ignored so that the JSON result returned by a GET may be modified and used when making a POST to update credentials. 
     * Create or update user credentials for a system and target user
     */
    async createUserCredentialRaw(requestParameters: CreateUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling createUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling createUserCredential.');
        }

        if (requestParameters.reqCreateCredential === null || requestParameters.reqCreateCredential === undefined) {
            throw new runtime.RequiredError('reqCreateCredential','Required parameter requestParameters.reqCreateCredential was null or undefined when calling createUserCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.skipCredentialCheck !== undefined) {
            queryParameters['skipCredentialCheck'] = requestParameters.skipCredentialCheck;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReqCreateCredentialToJSON(requestParameters.reqCreateCredential),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Create or update credentials in the Security Kernel for given system and *target user* using a request body. Requester must be owner of the system. Credentials for multiple authentication methods may be provided.  Note that user making the request and *target user* may be different and frequently are different.  By default any credentials provided for LINUX type systems are verified. Use query parameter skipCredentialCheck=true to bypass initial verification of credentials.  Note that the attribute authnMethod is allowed but ignored so that the JSON result returned by a GET may be modified and used when making a POST to update credentials. 
     * Create or update user credentials for a system and target user
     */
    async createUserCredential(requestParameters: CreateUserCredentialRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.createUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Highly restricted. Only certain Tapis services authorized. Retrieve credentials for given system, *target user* and authentication method.  Note that user making the request and *target user* may be different and frequently are different.  Desired authentication method may be specified using query parameter authnMethod=<method>. If desired authentication method not specified then credentials for the system\'s default authentication method are returned.  The result includes the field authnMethod indicating the authentication method associated with the returned credentials. 
     * Retrieve user credentials for a system and target user
     */
    async getUserCredentialRaw(requestParameters: GetUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespCredential>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling getUserCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.authnMethod !== undefined) {
            queryParameters['authnMethod'] = requestParameters.authnMethod;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespCredentialFromJSON(jsonValue));
    }

    /**
     * Highly restricted. Only certain Tapis services authorized. Retrieve credentials for given system, *target user* and authentication method.  Note that user making the request and *target user* may be different and frequently are different.  Desired authentication method may be specified using query parameter authnMethod=<method>. If desired authentication method not specified then credentials for the system\'s default authentication method are returned.  The result includes the field authnMethod indicating the authentication method associated with the returned credentials. 
     * Retrieve user credentials for a system and target user
     */
    async getUserCredential(requestParameters: GetUserCredentialRequest, initOverrides?: RequestInit): Promise<RespCredential> {
        const response = await this.getUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove credentials from the Security Kernel for given system and *target user*. Requester must be owner of the system.  Note that user making the request and *target user* may be different and frequently are different. 
     * Remove user credentials for a system and target user
     */
    async removeUserCredentialRaw(requestParameters: RemoveUserCredentialRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RespBasic>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling removeUserCredential.');
        }

        if (requestParameters.userName === null || requestParameters.userName === undefined) {
            throw new runtime.RequiredError('userName','Required parameter requestParameters.userName was null or undefined when calling removeUserCredential.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Tapis-Token"] = this.configuration.apiKey("X-Tapis-Token"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/systems/credential/{systemId}/user/{userName}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"userName"}}`, encodeURIComponent(String(requestParameters.userName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RespBasicFromJSON(jsonValue));
    }

    /**
     * Remove credentials from the Security Kernel for given system and *target user*. Requester must be owner of the system.  Note that user making the request and *target user* may be different and frequently are different. 
     * Remove user credentials for a system and target user
     */
    async removeUserCredential(requestParameters: RemoveUserCredentialRequest, initOverrides?: RequestInit): Promise<RespBasic> {
        const response = await this.removeUserCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
