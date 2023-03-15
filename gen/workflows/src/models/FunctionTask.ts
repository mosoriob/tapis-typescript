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

import { exists, mapValues } from '../runtime';
import {
    BaseTask,
    BaseTaskFromJSON,
    BaseTaskFromJSONTyped,
    BaseTaskToJSON,
    EnumInstaller,
    EnumInstallerFromJSON,
    EnumInstallerFromJSONTyped,
    EnumInstallerToJSON,
    EnumRuntimeEnvironment,
    EnumRuntimeEnvironmentFromJSON,
    EnumRuntimeEnvironmentFromJSONTyped,
    EnumRuntimeEnvironmentToJSON,
    EnumTaskType,
    EnumTaskTypeFromJSON,
    EnumTaskTypeFromJSONTyped,
    EnumTaskTypeToJSON,
    ExecutionProfile,
    ExecutionProfileFromJSON,
    ExecutionProfileFromJSONTyped,
    ExecutionProfileToJSON,
    FunctionTaskAllOf,
    FunctionTaskAllOfFromJSON,
    FunctionTaskAllOfFromJSONTyped,
    FunctionTaskAllOfToJSON,
    TaskDependency,
    TaskDependencyFromJSON,
    TaskDependencyFromJSONTyped,
    TaskDependencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface FunctionTask
 */
export interface FunctionTask {
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    id: string;
    /**
     * 
     * @type {EnumTaskType}
     * @memberof FunctionTask
     */
    type: EnumTaskType;
    /**
     * 
     * @type {Array<TaskDependency>}
     * @memberof FunctionTask
     */
    depends_on?: Array<TaskDependency>;
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    description?: string;
    /**
     * 
     * @type {ExecutionProfile}
     * @memberof FunctionTask
     */
    execution_profile?: ExecutionProfile;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FunctionTask
     */
    input?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof FunctionTask
     */
    output?: { [key: string]: object; };
    /**
     * 
     * @type {EnumRuntimeEnvironment}
     * @memberof FunctionTask
     */
    runtime?: EnumRuntimeEnvironment;
    /**
     * 
     * @type {EnumInstaller}
     * @memberof FunctionTask
     */
    installer?: EnumInstaller;
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    command?: string;
    /**
     * 
     * @type {string}
     * @memberof FunctionTask
     */
    code?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FunctionTask
     */
    packages?: Array<string>;
}

export function FunctionTaskFromJSON(json: any): FunctionTask {
    return FunctionTaskFromJSONTyped(json, false);
}

export function FunctionTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': EnumTaskTypeFromJSON(json['type']),
        'depends_on': !exists(json, 'depends_on') ? undefined : ((json['depends_on'] as Array<any>).map(TaskDependencyFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'execution_profile': !exists(json, 'execution_profile') ? undefined : ExecutionProfileFromJSON(json['execution_profile']),
        'input': !exists(json, 'input') ? undefined : json['input'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'runtime': !exists(json, 'runtime') ? undefined : EnumRuntimeEnvironmentFromJSON(json['runtime']),
        'installer': !exists(json, 'installer') ? undefined : EnumInstallerFromJSON(json['installer']),
        'command': !exists(json, 'command') ? undefined : json['command'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'packages': !exists(json, 'packages') ? undefined : json['packages'],
    };
}

export function FunctionTaskToJSON(value?: FunctionTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': EnumTaskTypeToJSON(value.type),
        'depends_on': value.depends_on === undefined ? undefined : ((value.depends_on as Array<any>).map(TaskDependencyToJSON)),
        'description': value.description,
        'execution_profile': ExecutionProfileToJSON(value.execution_profile),
        'input': value.input,
        'output': value.output,
        'runtime': EnumRuntimeEnvironmentToJSON(value.runtime),
        'installer': EnumInstallerToJSON(value.installer),
        'command': value.command,
        'code': value.code,
        'packages': value.packages,
    };
}

