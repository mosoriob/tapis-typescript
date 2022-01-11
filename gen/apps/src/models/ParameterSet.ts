/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AppArgSpec,
    AppArgSpecFromJSON,
    AppArgSpecFromJSONTyped,
    AppArgSpecToJSON,
    KeyValuePair,
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
    ParameterSetArchiveFilter,
    ParameterSetArchiveFilterFromJSON,
    ParameterSetArchiveFilterFromJSONTyped,
    ParameterSetArchiveFilterToJSON,
} from './';

/**
 * 
 * @export
 * @interface ParameterSet
 */
export interface ParameterSet {
    /**
     * 
     * @type {Array<AppArgSpec>}
     * @memberof ParameterSet
     */
    appArgs?: Array<AppArgSpec>;
    /**
     * 
     * @type {Array<AppArgSpec>}
     * @memberof ParameterSet
     */
    containerArgs?: Array<AppArgSpec>;
    /**
     * 
     * @type {Array<AppArgSpec>}
     * @memberof ParameterSet
     */
    schedulerOptions?: Array<AppArgSpec>;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof ParameterSet
     */
    envVariables?: Array<KeyValuePair>;
    /**
     * 
     * @type {ParameterSetArchiveFilter}
     * @memberof ParameterSet
     */
    archiveFilter?: ParameterSetArchiveFilter;
}

export function ParameterSetFromJSON(json: any): ParameterSet {
    return ParameterSetFromJSONTyped(json, false);
}

export function ParameterSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appArgs': !exists(json, 'appArgs') ? undefined : ((json['appArgs'] as Array<any>).map(AppArgSpecFromJSON)),
        'containerArgs': !exists(json, 'containerArgs') ? undefined : ((json['containerArgs'] as Array<any>).map(AppArgSpecFromJSON)),
        'schedulerOptions': !exists(json, 'schedulerOptions') ? undefined : ((json['schedulerOptions'] as Array<any>).map(AppArgSpecFromJSON)),
        'envVariables': !exists(json, 'envVariables') ? undefined : ((json['envVariables'] as Array<any>).map(KeyValuePairFromJSON)),
        'archiveFilter': !exists(json, 'archiveFilter') ? undefined : ParameterSetArchiveFilterFromJSON(json['archiveFilter']),
    };
}

export function ParameterSetToJSON(value?: ParameterSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appArgs': value.appArgs === undefined ? undefined : ((value.appArgs as Array<any>).map(AppArgSpecToJSON)),
        'containerArgs': value.containerArgs === undefined ? undefined : ((value.containerArgs as Array<any>).map(AppArgSpecToJSON)),
        'schedulerOptions': value.schedulerOptions === undefined ? undefined : ((value.schedulerOptions as Array<any>).map(AppArgSpecToJSON)),
        'envVariables': value.envVariables === undefined ? undefined : ((value.envVariables as Array<any>).map(KeyValuePairToJSON)),
        'archiveFilter': ParameterSetArchiveFilterToJSON(value.archiveFilter),
    };
}

