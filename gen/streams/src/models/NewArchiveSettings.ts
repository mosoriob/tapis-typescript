/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
 *
 * The version of the OpenAPI document: 1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewArchiveSettings
 */
export interface NewArchiveSettings {
    /**
     * ID of Project to archive
     * @type {string}
     * @memberof NewArchiveSettings
     */
    project_id?: string;
    /**
     * ID os System ID to send archive too.
     * @type {string}
     * @memberof NewArchiveSettings
     */
    system_id?: string;
    /**
     * The directory path to write archive to on selected System.
     * @type {string}
     * @memberof NewArchiveSettings
     */
    path?: string;
    /**
     * The archive file format - zip is currently supported
     * @type {string}
     * @memberof NewArchiveSettings
     */
    archive_format?: NewArchiveSettingsArchiveFormatEnum;
    /**
     * The data measurement format - csv or JSON is currently supported
     * @type {string}
     * @memberof NewArchiveSettings
     */
    data_format?: NewArchiveSettingsDataFormatEnum;
    /**
     * How often should this archive occur - currently supports one-time_now
     * @type {string}
     * @memberof NewArchiveSettings
     */
    frequency?: NewArchiveSettingsFrequencyEnum;
    /**
     * The range of data to archive_type - all or custom supported
     * @type {string}
     * @memberof NewArchiveSettings
     */
    range?: NewArchiveSettingsRangeEnum;
    /**
     * A ISO8601 formatted datetime string for the starting time for archival data- only for custom range
     * @type {string}
     * @memberof NewArchiveSettings
     */
    start_date?: string;
    /**
     * A ISO8601 formatted datetime string for the end time for archival data - only for custom range
     * @type {string}
     * @memberof NewArchiveSettings
     */
    end_date?: string;
}

/**
* @export
* @enum {string}
*/
export enum NewArchiveSettingsArchiveFormatEnum {
    Zip = 'zip'
}/**
* @export
* @enum {string}
*/
export enum NewArchiveSettingsDataFormatEnum {
    Csv = 'csv',
    Json = 'json'
}/**
* @export
* @enum {string}
*/
export enum NewArchiveSettingsFrequencyEnum {
    OneTime = 'one-time'
}/**
* @export
* @enum {string}
*/
export enum NewArchiveSettingsRangeEnum {
    Custom = 'custom',
    All = 'all'
}

export function NewArchiveSettingsFromJSON(json: any): NewArchiveSettings {
    return NewArchiveSettingsFromJSONTyped(json, false);
}

export function NewArchiveSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewArchiveSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'project_id': !exists(json, 'project_id') ? undefined : json['project_id'],
        'system_id': !exists(json, 'system_id') ? undefined : json['system_id'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'archive_format': !exists(json, 'archive_format') ? undefined : json['archive_format'],
        'data_format': !exists(json, 'data_format') ? undefined : json['data_format'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'range': !exists(json, 'range') ? undefined : json['range'],
        'start_date': !exists(json, 'start_date') ? undefined : json['start_date'],
        'end_date': !exists(json, 'end_date') ? undefined : json['end_date'],
    };
}

export function NewArchiveSettingsToJSON(value?: NewArchiveSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.project_id,
        'system_id': value.system_id,
        'path': value.path,
        'archive_format': value.archive_format,
        'data_format': value.data_format,
        'frequency': value.frequency,
        'range': value.range,
        'start_date': value.start_date,
        'end_date': value.end_date,
    };
}

