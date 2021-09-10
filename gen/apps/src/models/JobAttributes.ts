/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FileInputDefinition,
    FileInputDefinitionFromJSON,
    FileInputDefinitionFromJSONTyped,
    FileInputDefinitionToJSON,
    NotificationSubscription,
    NotificationSubscriptionFromJSON,
    NotificationSubscriptionFromJSONTyped,
    NotificationSubscriptionToJSON,
    ParameterSet,
    ParameterSetFromJSON,
    ParameterSetFromJSONTyped,
    ParameterSetToJSON,
} from './';

/**
 * 
 * @export
 * @interface JobAttributes
 */
export interface JobAttributes {
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JobAttributes
     */
    dynamicExecSystem?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof JobAttributes
     */
    execSystemConstraints?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    execSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    execSystemExecDir?: string;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    execSystemInputDir?: string;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    execSystemOutputDir?: string;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    execSystemLogicalQueue?: string;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    archiveSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof JobAttributes
     */
    archiveSystemDir?: string;
    /**
     * 
     * @type {boolean}
     * @memberof JobAttributes
     */
    archiveOnAppError?: boolean;
    /**
     * 
     * @type {ParameterSet}
     * @memberof JobAttributes
     */
    parameterSet?: ParameterSet;
    /**
     * 
     * @type {Array<FileInputDefinition>}
     * @memberof JobAttributes
     */
    fileInputDefinitions?: Array<FileInputDefinition>;
    /**
     * 
     * @type {number}
     * @memberof JobAttributes
     */
    nodeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof JobAttributes
     */
    coresPerNode?: number;
    /**
     * 
     * @type {number}
     * @memberof JobAttributes
     */
    memoryMB?: number;
    /**
     * 
     * @type {number}
     * @memberof JobAttributes
     */
    maxMinutes?: number;
    /**
     * 
     * @type {Array<NotificationSubscription>}
     * @memberof JobAttributes
     */
    subscriptions?: Array<NotificationSubscription>;
    /**
     * 
     * @type {Array<string>}
     * @memberof JobAttributes
     */
    tags?: Array<string>;
}

export function JobAttributesFromJSON(json: any): JobAttributes {
    return JobAttributesFromJSONTyped(json, false);
}

export function JobAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dynamicExecSystem': !exists(json, 'dynamicExecSystem') ? undefined : json['dynamicExecSystem'],
        'execSystemConstraints': !exists(json, 'execSystemConstraints') ? undefined : json['execSystemConstraints'],
        'execSystemId': !exists(json, 'execSystemId') ? undefined : json['execSystemId'],
        'execSystemExecDir': !exists(json, 'execSystemExecDir') ? undefined : json['execSystemExecDir'],
        'execSystemInputDir': !exists(json, 'execSystemInputDir') ? undefined : json['execSystemInputDir'],
        'execSystemOutputDir': !exists(json, 'execSystemOutputDir') ? undefined : json['execSystemOutputDir'],
        'execSystemLogicalQueue': !exists(json, 'execSystemLogicalQueue') ? undefined : json['execSystemLogicalQueue'],
        'archiveSystemId': !exists(json, 'archiveSystemId') ? undefined : json['archiveSystemId'],
        'archiveSystemDir': !exists(json, 'archiveSystemDir') ? undefined : json['archiveSystemDir'],
        'archiveOnAppError': !exists(json, 'archiveOnAppError') ? undefined : json['archiveOnAppError'],
        'parameterSet': !exists(json, 'parameterSet') ? undefined : ParameterSetFromJSON(json['parameterSet']),
        'fileInputDefinitions': !exists(json, 'fileInputDefinitions') ? undefined : ((json['fileInputDefinitions'] as Array<any>).map(FileInputDefinitionFromJSON)),
        'nodeCount': !exists(json, 'nodeCount') ? undefined : json['nodeCount'],
        'coresPerNode': !exists(json, 'coresPerNode') ? undefined : json['coresPerNode'],
        'memoryMB': !exists(json, 'memoryMB') ? undefined : json['memoryMB'],
        'maxMinutes': !exists(json, 'maxMinutes') ? undefined : json['maxMinutes'],
        'subscriptions': !exists(json, 'subscriptions') ? undefined : ((json['subscriptions'] as Array<any>).map(NotificationSubscriptionFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function JobAttributesToJSON(value?: JobAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'dynamicExecSystem': value.dynamicExecSystem,
        'execSystemConstraints': value.execSystemConstraints,
        'execSystemId': value.execSystemId,
        'execSystemExecDir': value.execSystemExecDir,
        'execSystemInputDir': value.execSystemInputDir,
        'execSystemOutputDir': value.execSystemOutputDir,
        'execSystemLogicalQueue': value.execSystemLogicalQueue,
        'archiveSystemId': value.archiveSystemId,
        'archiveSystemDir': value.archiveSystemDir,
        'archiveOnAppError': value.archiveOnAppError,
        'parameterSet': ParameterSetToJSON(value.parameterSet),
        'fileInputDefinitions': value.fileInputDefinitions === undefined ? undefined : ((value.fileInputDefinitions as Array<any>).map(FileInputDefinitionToJSON)),
        'nodeCount': value.nodeCount,
        'coresPerNode': value.coresPerNode,
        'memoryMB': value.memoryMB,
        'maxMinutes': value.maxMinutes,
        'subscriptions': value.subscriptions === undefined ? undefined : ((value.subscriptions as Array<any>).map(NotificationSubscriptionToJSON)),
        'tags': value.tags,
    };
}


