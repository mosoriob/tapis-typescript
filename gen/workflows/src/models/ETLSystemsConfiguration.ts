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
    ETLDataSystem,
    ETLDataSystemFromJSON,
    ETLDataSystemFromJSONTyped,
    ETLDataSystemToJSON,
    ETLManifestsSystem,
    ETLManifestsSystemFromJSON,
    ETLManifestsSystemFromJSONTyped,
    ETLManifestsSystemToJSON,
} from './';

/**
 * 
 * @export
 * @interface ETLSystemsConfiguration
 */
export interface ETLSystemsConfiguration {
    /**
     * 
     * @type {ETLManifestsSystem}
     * @memberof ETLSystemsConfiguration
     */
    manifests: ETLManifestsSystem;
    /**
     * 
     * @type {ETLDataSystem}
     * @memberof ETLSystemsConfiguration
     */
    data: ETLDataSystem;
}

export function ETLSystemsConfigurationFromJSON(json: any): ETLSystemsConfiguration {
    return ETLSystemsConfigurationFromJSONTyped(json, false);
}

export function ETLSystemsConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLSystemsConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'manifests': ETLManifestsSystemFromJSON(json['manifests']),
        'data': ETLDataSystemFromJSON(json['data']),
    };
}

export function ETLSystemsConfigurationToJSON(value?: ETLSystemsConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'manifests': ETLManifestsSystemToJSON(value.manifests),
        'data': ETLDataSystemToJSON(value.data),
    };
}
