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
    ReqS3Cred,
    ReqS3CredFromJSON,
    ReqS3CredFromJSONTyped,
    ReqS3CredToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqS3ArchiveAllOf
 */
export interface ReqS3ArchiveAllOf {
    /**
     * 
     * @type {string}
     * @memberof ReqS3ArchiveAllOf
     */
    endpoint: string;
    /**
     * 
     * @type {string}
     * @memberof ReqS3ArchiveAllOf
     */
    bucket: string;
    /**
     * 
     * @type {string}
     * @memberof ReqS3ArchiveAllOf
     */
    region: string;
    /**
     * 
     * @type {ReqS3Cred}
     * @memberof ReqS3ArchiveAllOf
     */
    credentials?: ReqS3Cred;
    /**
     * 
     * @type {string}
     * @memberof ReqS3ArchiveAllOf
     */
    identity_uuid?: string;
}

export function ReqS3ArchiveAllOfFromJSON(json: any): ReqS3ArchiveAllOf {
    return ReqS3ArchiveAllOfFromJSONTyped(json, false);
}

export function ReqS3ArchiveAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqS3ArchiveAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endpoint': json['endpoint'],
        'bucket': json['bucket'],
        'region': json['region'],
        'credentials': !exists(json, 'credentials') ? undefined : ReqS3CredFromJSON(json['credentials']),
        'identity_uuid': !exists(json, 'identity_uuid') ? undefined : json['identity_uuid'],
    };
}

export function ReqS3ArchiveAllOfToJSON(value?: ReqS3ArchiveAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endpoint': value.endpoint,
        'bucket': value.bucket,
        'region': value.region,
        'credentials': ReqS3CredToJSON(value.credentials),
        'identity_uuid': value.identity_uuid,
    };
}

