/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.3.3
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Credential,
    CredentialFromJSON,
    CredentialFromJSONTyped,
    CredentialToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespCredential
 */
export interface RespCredential {
    /**
     * 
     * @type {string}
     * @memberof RespCredential
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RespCredential
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof RespCredential
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof RespCredential
     */
    commit?: string;
    /**
     * 
     * @type {string}
     * @memberof RespCredential
     */
    build?: string;
    /**
     * 
     * @type {Credential}
     * @memberof RespCredential
     */
    result?: Credential;
    /**
     * 
     * @type {object}
     * @memberof RespCredential
     */
    metadata?: object;
}

export function RespCredentialFromJSON(json: any): RespCredential {
    return RespCredentialFromJSONTyped(json, false);
}

export function RespCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespCredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'commit': !exists(json, 'commit') ? undefined : json['commit'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'result': !exists(json, 'result') ? undefined : CredentialFromJSON(json['result']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function RespCredentialToJSON(value?: RespCredential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'version': value.version,
        'commit': value.commit,
        'build': value.build,
        'result': CredentialToJSON(value.result),
        'metadata': value.metadata,
    };
}

