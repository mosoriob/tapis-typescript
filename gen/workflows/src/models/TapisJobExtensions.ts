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
    TapisETLExtension,
    TapisETLExtensionFromJSON,
    TapisETLExtensionFromJSONTyped,
    TapisETLExtensionToJSON,
} from './';

/**
 * 
 * @export
 * @interface TapisJobExtensions
 */
export interface TapisJobExtensions {
    /**
     * 
     * @type {TapisETLExtension}
     * @memberof TapisJobExtensions
     */
    tapis_etl?: TapisETLExtension;
}

export function TapisJobExtensionsFromJSON(json: any): TapisJobExtensions {
    return TapisJobExtensionsFromJSONTyped(json, false);
}

export function TapisJobExtensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TapisJobExtensions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tapis_etl': !exists(json, 'tapis_etl') ? undefined : TapisETLExtensionFromJSON(json['tapis_etl']),
    };
}

export function TapisJobExtensionsToJSON(value?: TapisJobExtensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tapis_etl': TapisETLExtensionToJSON(value.tapis_etl),
    };
}

