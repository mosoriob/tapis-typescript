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
    EnumArchiveType,
    EnumArchiveTypeFromJSON,
    EnumArchiveTypeFromJSONTyped,
    EnumArchiveTypeToJSON,
    ReqBaseArchive,
    ReqBaseArchiveFromJSON,
    ReqBaseArchiveFromJSONTyped,
    ReqBaseArchiveToJSON,
    TapisSystemArchiveAllOf,
    TapisSystemArchiveAllOfFromJSON,
    TapisSystemArchiveAllOfFromJSONTyped,
    TapisSystemArchiveAllOfToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqTapisSystemArchive
 */
export interface ReqTapisSystemArchive {
    /**
     * 
     * @type {string}
     * @memberof ReqTapisSystemArchive
     */
    id: string;
    /**
     * 
     * @type {EnumArchiveType}
     * @memberof ReqTapisSystemArchive
     */
    type: EnumArchiveType;
    /**
     * 
     * @type {string}
     * @memberof ReqTapisSystemArchive
     */
    archive_dir?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqTapisSystemArchive
     */
    system_id: string;
}

export function ReqTapisSystemArchiveFromJSON(json: any): ReqTapisSystemArchive {
    return ReqTapisSystemArchiveFromJSONTyped(json, false);
}

export function ReqTapisSystemArchiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqTapisSystemArchive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': EnumArchiveTypeFromJSON(json['type']),
        'archive_dir': !exists(json, 'archive_dir') ? undefined : json['archive_dir'],
        'system_id': json['system_id'],
    };
}

export function ReqTapisSystemArchiveToJSON(value?: ReqTapisSystemArchive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': EnumArchiveTypeToJSON(value.type),
        'archive_dir': value.archive_dir,
        'system_id': value.system_id,
    };
}
