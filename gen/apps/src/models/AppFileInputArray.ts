/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 1.0.0-rc1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    FileInputModeEnum,
    FileInputModeEnumFromJSON,
    FileInputModeEnumFromJSONTyped,
    FileInputModeEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface AppFileInputArray
 */
export interface AppFileInputArray {
    /**
     * 
     * @type {string}
     * @memberof AppFileInputArray
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppFileInputArray
     */
    description?: string;
    /**
     * 
     * @type {FileInputModeEnum}
     * @memberof AppFileInputArray
     */
    inputMode?: FileInputModeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppFileInputArray
     */
    sourceUrls?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof AppFileInputArray
     */
    targetDir: string;
}

export function AppFileInputArrayFromJSON(json: any): AppFileInputArray {
    return AppFileInputArrayFromJSONTyped(json, false);
}

export function AppFileInputArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppFileInputArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'inputMode': !exists(json, 'inputMode') ? undefined : FileInputModeEnumFromJSON(json['inputMode']),
        'sourceUrls': !exists(json, 'sourceUrls') ? undefined : json['sourceUrls'],
        'targetDir': json['targetDir'],
    };
}

export function AppFileInputArrayToJSON(value?: AppFileInputArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'inputMode': FileInputModeEnumToJSON(value.inputMode),
        'sourceUrls': value.sourceUrls,
        'targetDir': value.targetDir,
    };
}


