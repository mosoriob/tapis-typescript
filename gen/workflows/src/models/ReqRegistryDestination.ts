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
    EnumDestinationType,
    EnumDestinationTypeFromJSON,
    EnumDestinationTypeFromJSONTyped,
    EnumDestinationTypeToJSON,
    ReqBaseDestination,
    ReqBaseDestinationFromJSON,
    ReqBaseDestinationFromJSONTyped,
    ReqBaseDestinationToJSON,
    ReqDestinationCredentials,
    ReqDestinationCredentialsFromJSON,
    ReqDestinationCredentialsFromJSONTyped,
    ReqDestinationCredentialsToJSON,
    ReqRegistryDestinationAllOf,
    ReqRegistryDestinationAllOfFromJSON,
    ReqRegistryDestinationAllOfFromJSONTyped,
    ReqRegistryDestinationAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqRegistryDestination
 */
export interface ReqRegistryDestination {
    /**
     * 
     * @type {EnumDestinationType}
     * @memberof ReqRegistryDestination
     */
    type: EnumDestinationType;
    /**
     * 
     * @type {ReqDestinationCredentials}
     * @memberof ReqRegistryDestination
     */
    credentials?: ReqDestinationCredentials;
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryDestination
     */
    identity_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryDestination
     */
    tag?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqRegistryDestination
     */
    url: string;
}

export function ReqRegistryDestinationFromJSON(json: any): ReqRegistryDestination {
    return ReqRegistryDestinationFromJSONTyped(json, false);
}

export function ReqRegistryDestinationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqRegistryDestination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': EnumDestinationTypeFromJSON(json['type']),
        'credentials': !exists(json, 'credentials') ? undefined : ReqDestinationCredentialsFromJSON(json['credentials']),
        'identity_uuid': !exists(json, 'identity_uuid') ? undefined : json['identity_uuid'],
        'tag': !exists(json, 'tag') ? undefined : json['tag'],
        'url': json['url'],
    };
}

export function ReqRegistryDestinationToJSON(value?: ReqRegistryDestination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': EnumDestinationTypeToJSON(value.type),
        'credentials': ReqDestinationCredentialsToJSON(value.credentials),
        'identity_uuid': value.identity_uuid,
        'tag': value.tag,
        'url': value.url,
    };
}

