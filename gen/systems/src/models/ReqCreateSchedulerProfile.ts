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

import { exists, mapValues } from '../runtime';
import {
    SchedulerHiddenOptionEnum,
    SchedulerHiddenOptionEnumFromJSON,
    SchedulerHiddenOptionEnumFromJSONTyped,
    SchedulerHiddenOptionEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqCreateSchedulerProfile
 */
export interface ReqCreateSchedulerProfile {
    /**
     * 
     * @type {string}
     * @memberof ReqCreateSchedulerProfile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateSchedulerProfile
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateSchedulerProfile
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateSchedulerProfile
     */
    moduleLoadCommand: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqCreateSchedulerProfile
     */
    modulesToLoad?: Array<string>;
    /**
     * 
     * @type {Array<SchedulerHiddenOptionEnum>}
     * @memberof ReqCreateSchedulerProfile
     */
    hiddenOptions?: Array<SchedulerHiddenOptionEnum>;
}

export function ReqCreateSchedulerProfileFromJSON(json: any): ReqCreateSchedulerProfile {
    return ReqCreateSchedulerProfileFromJSONTyped(json, false);
}

export function ReqCreateSchedulerProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateSchedulerProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'moduleLoadCommand': json['moduleLoadCommand'],
        'modulesToLoad': !exists(json, 'modulesToLoad') ? undefined : json['modulesToLoad'],
        'hiddenOptions': !exists(json, 'hiddenOptions') ? undefined : ((json['hiddenOptions'] as Array<any>).map(SchedulerHiddenOptionEnumFromJSON)),
    };
}

export function ReqCreateSchedulerProfileToJSON(value?: ReqCreateSchedulerProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'owner': value.owner,
        'moduleLoadCommand': value.moduleLoadCommand,
        'modulesToLoad': value.modulesToLoad,
        'hiddenOptions': value.hiddenOptions === undefined ? undefined : ((value.hiddenOptions as Array<any>).map(SchedulerHiddenOptionEnumToJSON)),
    };
}

