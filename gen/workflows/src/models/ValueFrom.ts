/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TaskOutputRef,
    TaskOutputRefFromJSON,
    TaskOutputRefFromJSONTyped,
    TaskOutputRefToJSON,
    ValueFromArgs,
    ValueFromArgsFromJSON,
    ValueFromArgsFromJSONTyped,
    ValueFromArgsToJSON,
    ValueFromEnv,
    ValueFromEnvFromJSON,
    ValueFromEnvFromJSONTyped,
    ValueFromEnvToJSON,
    ValueFromHost,
    ValueFromHostFromJSON,
    ValueFromHostFromJSONTyped,
    ValueFromHostToJSON,
    ValueFromSecret,
    ValueFromSecretFromJSON,
    ValueFromSecretFromJSONTyped,
    ValueFromSecretToJSON,
    ValueFromTaskOutput,
    ValueFromTaskOutputFromJSON,
    ValueFromTaskOutputFromJSONTyped,
    ValueFromTaskOutputToJSON,
} from './';

/**
 * 
 * @export
 * @interface ValueFrom
 */
export interface ValueFrom {
    /**
     * 
     * @type {string}
     * @memberof ValueFrom
     */
    arg?: string;
    /**
     * 
     * @type {string}
     * @memberof ValueFrom
     */
    env?: string;
    /**
     * 
     * @type {TaskOutputRef}
     * @memberof ValueFrom
     */
    task_output?: TaskOutputRef;
    /**
     * 
     * @type {string}
     * @memberof ValueFrom
     */
    host?: string;
    /**
     * 
     * @type {string}
     * @memberof ValueFrom
     */
    engine?: string;
    /**
     * 
     * @type {string}
     * @memberof ValueFrom
     */
    pk?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ValueFrom
     */
    field_selector?: Array<string>;
}

export function ValueFromFromJSON(json: any): ValueFrom {
    return ValueFromFromJSONTyped(json, false);
}

export function ValueFromFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValueFrom {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arg': !exists(json, 'arg') ? undefined : json['arg'],
        'env': !exists(json, 'env') ? undefined : json['env'],
        'task_output': !exists(json, 'task_output') ? undefined : TaskOutputRefFromJSON(json['task_output']),
        'host': !exists(json, 'host') ? undefined : json['host'],
        'engine': !exists(json, 'engine') ? undefined : json['engine'],
        'pk': !exists(json, 'pk') ? undefined : json['pk'],
        'field_selector': !exists(json, 'field_selector') ? undefined : json['field_selector'],
    };
}

export function ValueFromToJSON(value?: ValueFrom | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arg': value.arg,
        'env': value.env,
        'task_output': TaskOutputRefToJSON(value.task_output),
        'host': value.host,
        'engine': value.engine,
        'pk': value.pk,
        'field_selector': value.field_selector,
    };
}
