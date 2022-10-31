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
    ArchiveTypeEnum,
    ArchiveTypeEnumFromJSON,
    ArchiveTypeEnumFromJSONTyped,
    ArchiveTypeEnumToJSON,
    BaseArchive,
    BaseArchiveFromJSON,
    BaseArchiveFromJSONTyped,
    BaseArchiveToJSON,
    SystemArchiveAllOf,
    SystemArchiveAllOfFromJSON,
    SystemArchiveAllOfFromJSONTyped,
    SystemArchiveAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface SystemArchive
 */
export interface SystemArchive {
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    id?: string;
    /**
     * 
     * @type {ArchiveTypeEnum}
     * @memberof SystemArchive
     */
    type?: ArchiveTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    tenant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    archive_dir?: string;
    /**
     * 
     * @type {string}
     * @memberof SystemArchive
     */
    system_id?: string;
}

export function SystemArchiveFromJSON(json: any): SystemArchive {
    return SystemArchiveFromJSONTyped(json, false);
}

export function SystemArchiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemArchive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : ArchiveTypeEnumFromJSON(json['type']),
        'group': !exists(json, 'group') ? undefined : json['group'],
        'tenant_id': !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'archive_dir': !exists(json, 'archive_dir') ? undefined : json['archive_dir'],
        'system_id': !exists(json, 'system_id') ? undefined : json['system_id'],
    };
}

export function SystemArchiveToJSON(value?: SystemArchive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': ArchiveTypeEnumToJSON(value.type),
        'group': value.group,
        'tenant_id': value.tenant_id,
        'owner': value.owner,
        'uuid': value.uuid,
        'archive_dir': value.archive_dir,
        'system_id': value.system_id,
    };
}

