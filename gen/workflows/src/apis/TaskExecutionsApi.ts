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
    CreateTaskExecutionPostReq,
    CreateTaskExecutionPostReqFromJSON,
    CreateTaskExecutionPostReqToJSON,
    ResourceURLResp,
    ResourceURLRespFromJSON,
    ResourceURLRespToJSON,
    RunStatusEnum,
    RunStatusEnumFromJSON,
    RunStatusEnumToJSON,
    StringResp,
    StringRespFromJSON,
    StringRespToJSON,
    TaskExecutionListResp,
    TaskExecutionListRespFromJSON,
    TaskExecutionListRespToJSON,
    TaskExecutionResp,
    TaskExecutionRespFromJSON,
    TaskExecutionRespToJSON,
} from '../models';

export interface CreateTaskExecutionRequest {
    xWORKFLOWEXECUTORTOKEN: string;
    pipelineRunUuid: string;
    createTaskExecutionPostReq: CreateTaskExecutionPostReq;
}

export interface GetTaskExecutionRequest {
    groupId: string;
    pipelineId: string;
    pipelineRunUuid: string;
    taskExecutionUuid: string;
}

export interface ListTaskExecutionsRequest {
    groupId: string;
    pipelineId: string;
    pipelineRunUuid: string;
}

export interface UpdateTaskExecutionStatusRequest {
    xWORKFLOWEXECUTORTOKEN: string;
    taskExecutionUuid: string;
    status: RunStatusEnum;
    UNKNOWN_PARAM_NAME?: ;
}

/**
 * 
 */
export class TaskExecutionsApi extends runtime.BaseAPI {

    /**
     * Create a task execution 
     * Task Executions
     */
    async createTaskExecutionRaw(requestParameters: CreateTaskExecutionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResourceURLResp>> {
        if (requestParameters.xWORKFLOWEXECUTORTOKEN === null || requestParameters.xWORKFLOWEXECUTORTOKEN === undefined) {
            throw new runtime.RequiredError('xWORKFLOWEXECUTORTOKEN','Required parameter requestParameters.xWORKFLOWEXECUTORTOKEN was null or undefined when calling createTaskExecution.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling createTaskExecution.');
        }

        if (requestParameters.createTaskExecutionPostReq === null || requestParameters.createTaskExecutionPostReq === undefined) {
            throw new runtime.RequiredError('createTaskExecutionPostReq','Required parameter requestParameters.createTaskExecutionPostReq was null or undefined when calling createTaskExecution.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xWORKFLOWEXECUTORTOKEN !== undefined && requestParameters.xWORKFLOWEXECUTORTOKEN !== null) {
            headerParameters['X-WORKFLOW-EXECUTOR-TOKEN'] = String(requestParameters.xWORKFLOWEXECUTORTOKEN);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/executor/runs/{pipeline_run_uuid}/executions`.replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTaskExecutionPostReqToJSON(requestParameters.createTaskExecutionPostReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResourceURLRespFromJSON(jsonValue));
    }

    /**
     * Create a task execution 
     * Task Executions
     */
    async createTaskExecution(requestParameters: CreateTaskExecutionRequest, initOverrides?: RequestInit): Promise<ResourceURLResp> {
        const response = await this.createTaskExecutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a Task Execution 
     * Task Executions
     */
    async getTaskExecutionRaw(requestParameters: GetTaskExecutionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TaskExecutionResp>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling getTaskExecution.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling getTaskExecution.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling getTaskExecution.');
        }

        if (requestParameters.taskExecutionUuid === null || requestParameters.taskExecutionUuid === undefined) {
            throw new runtime.RequiredError('taskExecutionUuid','Required parameter requestParameters.taskExecutionUuid was null or undefined when calling getTaskExecution.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/pipelines/{pipeline_id}/runs/{pipeline_run_uuid}/executions/{task_execution_uuid}`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"pipeline_id"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))).replace(`{${"task_execution_uuid"}}`, encodeURIComponent(String(requestParameters.taskExecutionUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskExecutionRespFromJSON(jsonValue));
    }

    /**
     * Get a Task Execution 
     * Task Executions
     */
    async getTaskExecution(requestParameters: GetTaskExecutionRequest, initOverrides?: RequestInit): Promise<TaskExecutionResp> {
        const response = await this.getTaskExecutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Task Executions for a pipeline run 
     * Task Executions
     */
    async listTaskExecutionsRaw(requestParameters: ListTaskExecutionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TaskExecutionListResp>> {
        if (requestParameters.groupId === null || requestParameters.groupId === undefined) {
            throw new runtime.RequiredError('groupId','Required parameter requestParameters.groupId was null or undefined when calling listTaskExecutions.');
        }

        if (requestParameters.pipelineId === null || requestParameters.pipelineId === undefined) {
            throw new runtime.RequiredError('pipelineId','Required parameter requestParameters.pipelineId was null or undefined when calling listTaskExecutions.');
        }

        if (requestParameters.pipelineRunUuid === null || requestParameters.pipelineRunUuid === undefined) {
            throw new runtime.RequiredError('pipelineRunUuid','Required parameter requestParameters.pipelineRunUuid was null or undefined when calling listTaskExecutions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/groups/{group_id}/pipelines/{pipeline_id}/runs/{pipeline_run_uuid}/executions`.replace(`{${"group_id"}}`, encodeURIComponent(String(requestParameters.groupId))).replace(`{${"pipeline_id"}}`, encodeURIComponent(String(requestParameters.pipelineId))).replace(`{${"pipeline_run_uuid"}}`, encodeURIComponent(String(requestParameters.pipelineRunUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskExecutionListRespFromJSON(jsonValue));
    }

    /**
     * List Task Executions for a pipeline run 
     * Task Executions
     */
    async listTaskExecutions(requestParameters: ListTaskExecutionsRequest, initOverrides?: RequestInit): Promise<TaskExecutionListResp> {
        const response = await this.listTaskExecutionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * update a task execution status 
     * Task Executions
     */
    async updateTaskExecutionStatusRaw(requestParameters: UpdateTaskExecutionStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<StringResp>> {
        if (requestParameters.xWORKFLOWEXECUTORTOKEN === null || requestParameters.xWORKFLOWEXECUTORTOKEN === undefined) {
            throw new runtime.RequiredError('xWORKFLOWEXECUTORTOKEN','Required parameter requestParameters.xWORKFLOWEXECUTORTOKEN was null or undefined when calling updateTaskExecutionStatus.');
        }

        if (requestParameters.taskExecutionUuid === null || requestParameters.taskExecutionUuid === undefined) {
            throw new runtime.RequiredError('taskExecutionUuid','Required parameter requestParameters.taskExecutionUuid was null or undefined when calling updateTaskExecutionStatus.');
        }

        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling updateTaskExecutionStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xWORKFLOWEXECUTORTOKEN !== undefined && requestParameters.xWORKFLOWEXECUTORTOKEN !== null) {
            headerParameters['X-WORKFLOW-EXECUTOR-TOKEN'] = String(requestParameters.xWORKFLOWEXECUTORTOKEN);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-TAPIS-TOKEN"] = this.configuration.apiKey("X-TAPIS-TOKEN"); // TapisJWT authentication
        }

        const response = await this.request({
            path: `/v3/workflows/executor/executions/{task_execution_uuid}/{status}`.replace(`{${"task_execution_uuid"}}`, encodeURIComponent(String(requestParameters.taskExecutionUuid))).replace(`{${"status"}}`, encodeURIComponent(String(requestParameters.status))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ToJSON(requestParameters.UNKNOWN_PARAM_NAME),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StringRespFromJSON(jsonValue));
    }

    /**
     * update a task execution status 
     * Task Executions
     */
    async updateTaskExecutionStatus(requestParameters: UpdateTaskExecutionStatusRequest, initOverrides?: RequestInit): Promise<StringResp> {
        const response = await this.updateTaskExecutionStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
