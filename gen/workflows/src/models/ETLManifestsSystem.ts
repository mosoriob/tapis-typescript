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
    ETLEnumManifestGenerationPolicy,
    ETLEnumManifestGenerationPolicyFromJSON,
    ETLEnumManifestGenerationPolicyFromJSONTyped,
    ETLEnumManifestGenerationPolicyToJSON,
    ETLEnumManifestPriority,
    ETLEnumManifestPriorityFromJSON,
    ETLEnumManifestPriorityFromJSONTyped,
    ETLEnumManifestPriorityToJSON,
    ETLManifestsSystemAllOf,
    ETLManifestsSystemAllOfFromJSON,
    ETLManifestsSystemAllOfFromJSONTyped,
    ETLManifestsSystemAllOfToJSON,
    ETLSystem,
    ETLSystemFromJSON,
    ETLSystemFromJSONTyped,
    ETLSystemToJSON,
} from './';

/**
 * 
 * @export
 * @interface ETLManifestsSystem
 */
export interface ETLManifestsSystem {
    /**
     * 
     * @type {string}
     * @memberof ETLManifestsSystem
     */
    system_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ETLManifestsSystem
     */
    path?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ETLManifestsSystem
     */
    include_patterns?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ETLManifestsSystem
     */
    exclude_patterns?: Array<string>;
    /**
     * 
     * @type {ETLEnumManifestGenerationPolicy}
     * @memberof ETLManifestsSystem
     */
    generation_policy?: ETLEnumManifestGenerationPolicy;
    /**
     * 
     * @type {ETLEnumManifestPriority}
     * @memberof ETLManifestsSystem
     */
    priority?: ETLEnumManifestPriority;
}

export function ETLManifestsSystemFromJSON(json: any): ETLManifestsSystem {
    return ETLManifestsSystemFromJSONTyped(json, false);
}

export function ETLManifestsSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLManifestsSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': !exists(json, 'system_id') ? undefined : json['system_id'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'include_patterns': !exists(json, 'include_patterns') ? undefined : json['include_patterns'],
        'exclude_patterns': !exists(json, 'exclude_patterns') ? undefined : json['exclude_patterns'],
        'generation_policy': !exists(json, 'generation_policy') ? undefined : ETLEnumManifestGenerationPolicyFromJSON(json['generation_policy']),
        'priority': !exists(json, 'priority') ? undefined : ETLEnumManifestPriorityFromJSON(json['priority']),
    };
}

export function ETLManifestsSystemToJSON(value?: ETLManifestsSystem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
        'path': value.path,
        'include_patterns': value.include_patterns,
        'exclude_patterns': value.exclude_patterns,
        'generation_policy': ETLEnumManifestGenerationPolicyToJSON(value.generation_policy),
        'priority': ETLEnumManifestPriorityToJSON(value.priority),
    };
}

