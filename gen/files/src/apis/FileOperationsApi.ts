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
    FileListingResponse,
    FileListingResponseFromJSON,
    FileListingResponseToJSON,
    FileStatInfoResponse,
    FileStatInfoResponseFromJSON,
    FileStatInfoResponseToJSON,
    FileStringResponse,
    FileStringResponseFromJSON,
    FileStringResponseToJSON,
    MkdirRequest,
    MkdirRequestFromJSON,
    MkdirRequestToJSON,
    MoveCopyRequest,
    MoveCopyRequestFromJSON,
    MoveCopyRequestToJSON,
    NativeLinuxOpRequest,
    NativeLinuxOpRequestFromJSON,
    NativeLinuxOpRequestToJSON,
    NativeLinuxOpResultResponse,
    NativeLinuxOpResultResponseFromJSON,
    NativeLinuxOpResultResponseToJSON,
} from '../models';

export interface DeleteRequest {
    systemId: string;
    path: string;
}

export interface GetStatInfoRequest {
    systemId: string;
    path: string;
    followLinks?: boolean;
}

export interface InsertRequest {
    systemId: string;
    path: string;
    file: Blob;
}

export interface ListFilesRequest {
    systemId: string;
    path: string;
    limit?: number;
    offset?: number;
    recurse?: boolean;
}

export interface MkdirOperationRequest {
    systemId: string;
    mkdirRequest?: MkdirRequest;
}

export interface MoveCopyOperationRequest {
    systemId: string;
    path: string;
    moveCopyRequest?: MoveCopyRequest;
}

export interface RunLinuxNativeOpRequest {
    systemId: string;
    path: string;
    recursive?: boolean;
    nativeLinuxOpRequest?: NativeLinuxOpRequest;
}

/**
 * 
 */
export class FileOperationsApi extends runtime.BaseAPI {

    /**
     * Delete a file in {systemID} at path {path}.
     * Delete a file or folder
     */
    async _deleteRaw(requestParameters: DeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling _delete.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling _delete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * Delete a file in {systemID} at path {path}.
     * Delete a file or folder
     */
    async _delete(requestParameters: DeleteRequest, initOverrides?: RequestInit): Promise<FileStringResponse> {
        const response = await this._deleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get stat information for a file or directory.
     * Get stat information for a file or directory.
     */
    async getStatInfoRaw(requestParameters: GetStatInfoRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FileStatInfoResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getStatInfo.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling getStatInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.followLinks !== undefined) {
            queryParameters['followLinks'] = requestParameters.followLinks;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/utils/linux/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStatInfoResponseFromJSON(jsonValue));
    }

    /**
     * Get stat information for a file or directory.
     * Get stat information for a file or directory.
     */
    async getStatInfo(requestParameters: GetStatInfoRequest, initOverrides?: RequestInit): Promise<FileStatInfoResponse> {
        const response = await this.getStatInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The file will be added at the {path} independent of the original file name
     * Upload a file
     */
    async insertRaw(requestParameters: InsertRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling insert.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling insert.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling insert.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * The file will be added at the {path} independent of the original file name
     * Upload a file
     */
    async insert(requestParameters: InsertRequest, initOverrides?: RequestInit): Promise<FileStringResponse> {
        const response = await this.insertRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List files in a storage system
     * List files/objects in a storage system.
     */
    async listFilesRaw(requestParameters: ListFilesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FileListingResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling listFiles.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling listFiles.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.recurse !== undefined) {
            queryParameters['recurse'] = requestParameters.recurse;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileListingResponseFromJSON(jsonValue));
    }

    /**
     * List files in a storage system
     * List files/objects in a storage system.
     */
    async listFiles(requestParameters: ListFilesRequest, initOverrides?: RequestInit): Promise<FileListingResponse> {
        const response = await this.listFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a directory in the system at path the given path
     * Create a directory
     */
    async mkdirRaw(requestParameters: MkdirOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling mkdir.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/files/ops/{systemId}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MkdirRequestToJSON(requestParameters.mkdirRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * Create a directory in the system at path the given path
     * Create a directory
     */
    async mkdir(requestParameters: MkdirOperationRequest, initOverrides?: RequestInit): Promise<FileStringResponse> {
        const response = await this.mkdirRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Move/copy a file in {systemID} at path {path}.
     * Move/copy a file or folder
     */
    async moveCopyRaw(requestParameters: MoveCopyOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FileStringResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling moveCopy.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling moveCopy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/files/ops/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MoveCopyRequestToJSON(requestParameters.moveCopyRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileStringResponseFromJSON(jsonValue));
    }

    /**
     * Move/copy a file in {systemID} at path {path}.
     * Move/copy a file or folder
     */
    async moveCopy(requestParameters: MoveCopyOperationRequest, initOverrides?: RequestInit): Promise<FileStringResponse> {
        const response = await this.moveCopyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Run a native operation: chmod, chown or chgrp.
     * Run a native operation
     */
    async runLinuxNativeOpRaw(requestParameters: RunLinuxNativeOpRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<NativeLinuxOpResultResponse>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling runLinuxNativeOp.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling runLinuxNativeOp.');
        }

        const queryParameters: any = {};

        if (requestParameters.recursive !== undefined) {
            queryParameters['recursive'] = requestParameters.recursive;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/files/utils/linux/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NativeLinuxOpRequestToJSON(requestParameters.nativeLinuxOpRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NativeLinuxOpResultResponseFromJSON(jsonValue));
    }

    /**
     * Run a native operation: chmod, chown or chgrp.
     * Run a native operation
     */
    async runLinuxNativeOp(requestParameters: RunLinuxNativeOpRequest, initOverrides?: RequestInit): Promise<NativeLinuxOpResultResponse> {
        const response = await this.runLinuxNativeOpRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
