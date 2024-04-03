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
    DataIntegrityProfile,
    DataIntegrityProfileFromJSON,
    DataIntegrityProfileFromJSONTyped,
    DataIntegrityProfileToJSON,
    ETLEnumManifestGenerationPolicy,
    ETLEnumManifestGenerationPolicyFromJSON,
    ETLEnumManifestGenerationPolicyFromJSONTyped,
    ETLEnumManifestGenerationPolicyToJSON,
    ETLEnumManifestPriority,
    ETLEnumManifestPriorityFromJSON,
    ETLEnumManifestPriorityFromJSONTyped,
    ETLEnumManifestPriorityToJSON,
    ETLLocalIOBox,
    ETLLocalIOBoxFromJSON,
    ETLLocalIOBoxFromJSONTyped,
    ETLLocalIOBoxToJSON,
    ETLLocalInboxAllOf,
    ETLLocalInboxAllOfFromJSON,
    ETLLocalInboxAllOfFromJSONTyped,
    ETLLocalInboxAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ETLLocalInbox
 */
export interface ETLLocalInbox {
    /**
     * 
     * @type {string}
     * @memberof ETLLocalInbox
     */
    system_id: string;
    /**
     * 
     * @type {string}
     * @memberof ETLLocalInbox
     */
    data_path: string;
    /**
     * 
     * @type {string}
     * @memberof ETLLocalInbox
     */
    manifests_path?: string;
    /**
     * 
     * @type {ETLEnumManifestGenerationPolicy}
     * @memberof ETLLocalInbox
     */
    manifest_generation_policy?: ETLEnumManifestGenerationPolicy;
    /**
     * 
     * @type {ETLEnumManifestPriority}
     * @memberof ETLLocalInbox
     */
    manifest_priority?: ETLEnumManifestPriority;
    /**
     * 
     * @type {DataIntegrityProfile}
     * @memberof ETLLocalInbox
     */
    data_integrity_profile?: DataIntegrityProfile;
    /**
     * 
     * @type {Array<string>}
     * @memberof ETLLocalInbox
     */
    exclude_pattern?: Array<string>;
}

export function ETLLocalInboxFromJSON(json: any): ETLLocalInbox {
    return ETLLocalInboxFromJSONTyped(json, false);
}

export function ETLLocalInboxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLLocalInbox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'system_id': json['system_id'],
        'data_path': json['data_path'],
        'manifests_path': !exists(json, 'manifests_path') ? undefined : json['manifests_path'],
        'manifest_generation_policy': !exists(json, 'manifest_generation_policy') ? undefined : ETLEnumManifestGenerationPolicyFromJSON(json['manifest_generation_policy']),
        'manifest_priority': !exists(json, 'manifest_priority') ? undefined : ETLEnumManifestPriorityFromJSON(json['manifest_priority']),
        'data_integrity_profile': !exists(json, 'data_integrity_profile') ? undefined : DataIntegrityProfileFromJSON(json['data_integrity_profile']),
        'exclude_pattern': !exists(json, 'exclude_pattern') ? undefined : json['exclude_pattern'],
    };
}

export function ETLLocalInboxToJSON(value?: ETLLocalInbox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'system_id': value.system_id,
        'data_path': value.data_path,
        'manifests_path': value.manifests_path,
        'manifest_generation_policy': ETLEnumManifestGenerationPolicyToJSON(value.manifest_generation_policy),
        'manifest_priority': ETLEnumManifestPriorityToJSON(value.manifest_priority),
        'data_integrity_profile': DataIntegrityProfileToJSON(value.data_integrity_profile),
        'exclude_pattern': value.exclude_pattern,
    };
}

