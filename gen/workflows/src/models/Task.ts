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

import {
    ContainerRunTask,
    FunctionTask,
    ImageBuildTask,
    RequestTask,
    TapisActorTask,
    TapisJobTask,
    ContainerRunTaskFromJSONTyped,
    ContainerRunTaskToJSON,
    FunctionTaskFromJSONTyped,
    FunctionTaskToJSON,
    ImageBuildTaskFromJSONTyped,
    ImageBuildTaskToJSON,
    RequestTaskFromJSONTyped,
    RequestTaskToJSON,
    TapisActorTaskFromJSONTyped,
    TapisActorTaskToJSON,
    TapisJobTaskFromJSONTyped,
    TapisJobTaskToJSON,
} from './';

/**
 * @type Task
 * 
 * @export
 */
export type Task = ContainerRunTask | FunctionTask | ImageBuildTask | RequestTask | TapisActorTask | TapisJobTask;

export function TaskFromJSON(json: any): Task {
    return TaskFromJSONTyped(json, false);
}

export function TaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): Task {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ContainerRunTaskFromJSONTyped(json, true), ...FunctionTaskFromJSONTyped(json, true), ...ImageBuildTaskFromJSONTyped(json, true), ...RequestTaskFromJSONTyped(json, true), ...TapisActorTaskFromJSONTyped(json, true), ...TapisJobTaskFromJSONTyped(json, true) };
}

export function TaskToJSON(value?: Task | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return { ...ContainerRunTaskToJSON(value), ...FunctionTaskToJSON(value), ...ImageBuildTaskToJSON(value), ...RequestTaskToJSON(value), ...TapisActorTaskToJSON(value), ...TapisJobTaskToJSON(value) };
}

