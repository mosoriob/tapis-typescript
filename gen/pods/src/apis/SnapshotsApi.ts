/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pods Service
 *  The Pods Service is a web service and distributed computing platform providing pods-as-a-service (PaaS). The service  implements a message broker and processor model that requests pods, alongside a health module to poll for pod data, including logs, status, and health. The primary use of this service is to have quick to deploy long-lived services based on Docker images that are exposed via HTTP or TCP endpoints listed by the API.  **The Pods service provides functionality for two types of pod solutions:**  * **Templated Pods** for run-as-is popular images. Neo4J is one example, the template manages TCP ports, user creation, and permissions.  * **Custom Pods** for arbitrary docker images with less functionality. In this case we will expose port 5000 and do nothing else.   The live-docs act as the most up-to-date API reference. Visit the [documentation for more information](https://tapis.readthedocs.io/en/latest/technical/pods.html). 
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DeleteSnapshotResponse,
    DeleteSnapshotResponseFromJSON,
    DeleteSnapshotResponseToJSON,
    FilesListResponse,
    FilesListResponseFromJSON,
    FilesListResponseToJSON,
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    NewSnapshot,
    NewSnapshotFromJSON,
    NewSnapshotToJSON,
    SnapshotResponse,
    SnapshotResponseFromJSON,
    SnapshotResponseToJSON,
    SnapshotsResponse,
    SnapshotsResponseFromJSON,
    SnapshotsResponseToJSON,
    UpdateSnapshot,
    UpdateSnapshotFromJSON,
    UpdateSnapshotToJSON,
} from '../models';

export interface CreateSnapshotRequest {
    newSnapshot: NewSnapshot;
}

export interface DeleteSnapshotRequest {
    snapshotId: any;
}

export interface GetSnapshotRequest {
    snapshotId: any;
}

export interface ListSnapshotFilesRequest {
    snapshotId: any;
}

export interface UpdateSnapshotRequest {
    snapshotId: any;
    updateSnapshot: UpdateSnapshot;
}

/**
 * 
 */
export class SnapshotsApi extends runtime.BaseAPI {

    /**
     * Create a snapshot with inputted information.  Notes: - Author will be given ADMIN level permissions to the snapshot.  Returns new snapshot object.
     * create_snapshot
     */
    async createSnapshotRaw(requestParameters: CreateSnapshotRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SnapshotResponse>> {
        if (requestParameters.newSnapshot === null || requestParameters.newSnapshot === undefined) {
            throw new runtime.RequiredError('newSnapshot','Required parameter requestParameters.newSnapshot was null or undefined when calling createSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pods/snapshots`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewSnapshotToJSON(requestParameters.newSnapshot),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SnapshotResponseFromJSON(jsonValue));
    }

    /**
     * Create a snapshot with inputted information.  Notes: - Author will be given ADMIN level permissions to the snapshot.  Returns new snapshot object.
     * create_snapshot
     */
    async createSnapshot(requestParameters: CreateSnapshotRequest, initOverrides?: RequestInit): Promise<SnapshotResponse> {
        const response = await this.createSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a snapshot.  Returns \"\".
     * delete_snapshot
     */
    async deleteSnapshotRaw(requestParameters: DeleteSnapshotRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DeleteSnapshotResponse>> {
        if (requestParameters.snapshotId === null || requestParameters.snapshotId === undefined) {
            throw new runtime.RequiredError('snapshotId','Required parameter requestParameters.snapshotId was null or undefined when calling deleteSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/snapshots/{snapshot_id}`.replace(`{${"snapshot_id"}}`, encodeURIComponent(String(requestParameters.snapshotId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteSnapshotResponseFromJSON(jsonValue));
    }

    /**
     * Delete a snapshot.  Returns \"\".
     * delete_snapshot
     */
    async deleteSnapshot(requestParameters: DeleteSnapshotRequest, initOverrides?: RequestInit): Promise<DeleteSnapshotResponse> {
        const response = await this.deleteSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a snapshot.  Returns retrieved snapshot object.
     * get_snapshot
     */
    async getSnapshotRaw(requestParameters: GetSnapshotRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SnapshotResponse>> {
        if (requestParameters.snapshotId === null || requestParameters.snapshotId === undefined) {
            throw new runtime.RequiredError('snapshotId','Required parameter requestParameters.snapshotId was null or undefined when calling getSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/snapshots/{snapshot_id}`.replace(`{${"snapshot_id"}}`, encodeURIComponent(String(requestParameters.snapshotId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SnapshotResponseFromJSON(jsonValue));
    }

    /**
     * Get a snapshot.  Returns retrieved snapshot object.
     * get_snapshot
     */
    async getSnapshot(requestParameters: GetSnapshotRequest, initOverrides?: RequestInit): Promise<SnapshotResponse> {
        const response = await this.getSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all snapshots in your respective tenant and site that you have READ or higher access to.  Returns a list of snapshots.
     * get_snapshots
     */
    async getSnapshotsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<SnapshotsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/snapshots`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SnapshotsResponseFromJSON(jsonValue));
    }

    /**
     * Get all snapshots in your respective tenant and site that you have READ or higher access to.  Returns a list of snapshots.
     * get_snapshots
     */
    async getSnapshots(initOverrides?: RequestInit): Promise<SnapshotsResponse> {
        const response = await this.getSnapshotsRaw(initOverrides);
        return await response.value();
    }

    /**
     * List files in snapshot.
     * list_snapshot_files
     */
    async listSnapshotFilesRaw(requestParameters: ListSnapshotFilesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<FilesListResponse>> {
        if (requestParameters.snapshotId === null || requestParameters.snapshotId === undefined) {
            throw new runtime.RequiredError('snapshotId','Required parameter requestParameters.snapshotId was null or undefined when calling listSnapshotFiles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/pods/snapshots/{snapshot_id}/list`.replace(`{${"snapshot_id"}}`, encodeURIComponent(String(requestParameters.snapshotId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FilesListResponseFromJSON(jsonValue));
    }

    /**
     * List files in snapshot.
     * list_snapshot_files
     */
    async listSnapshotFiles(requestParameters: ListSnapshotFilesRequest, initOverrides?: RequestInit): Promise<FilesListResponse> {
        const response = await this.listSnapshotFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a snapshot.  Note: - Fields that change snapshot source or sink are not modifiable. Please recreate your snapshot in that case.  Returns updated snapshot object.
     * update_snapshot
     */
    async updateSnapshotRaw(requestParameters: UpdateSnapshotRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SnapshotResponse>> {
        if (requestParameters.snapshotId === null || requestParameters.snapshotId === undefined) {
            throw new runtime.RequiredError('snapshotId','Required parameter requestParameters.snapshotId was null or undefined when calling updateSnapshot.');
        }

        if (requestParameters.updateSnapshot === null || requestParameters.updateSnapshot === undefined) {
            throw new runtime.RequiredError('updateSnapshot','Required parameter requestParameters.updateSnapshot was null or undefined when calling updateSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/pods/snapshots/{snapshot_id}`.replace(`{${"snapshot_id"}}`, encodeURIComponent(String(requestParameters.snapshotId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSnapshotToJSON(requestParameters.updateSnapshot),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SnapshotResponseFromJSON(jsonValue));
    }

    /**
     * Update a snapshot.  Note: - Fields that change snapshot source or sink are not modifiable. Please recreate your snapshot in that case.  Returns updated snapshot object.
     * update_snapshot
     */
    async updateSnapshot(requestParameters: UpdateSnapshotRequest, initOverrides?: RequestInit): Promise<SnapshotResponse> {
        const response = await this.updateSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
