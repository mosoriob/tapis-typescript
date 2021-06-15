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
 * @interface MeasuredProperty
 */
export interface MeasuredProperty {
    /**
     * The label of property.
     * @type {string}
     * @memberof MeasuredProperty
     */
    label?: string;
    /**
     * The url for the properties ontology
     * @type {string}
     * @memberof MeasuredProperty
     */
    url?: string;
    /**
     * Name of the ontology this unit belongs too.
     * @type {string}
     * @memberof MeasuredProperty
     */
    ontology?: string;
}

export function MeasuredPropertyFromJSON(json: any): MeasuredProperty {
    return MeasuredPropertyFromJSONTyped(json, false);
}

export function MeasuredPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasuredProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'ontology': !exists(json, 'ontology') ? undefined : json['ontology'],
    };
}

export function MeasuredPropertyToJSON(value?: MeasuredProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'url': value.url,
        'ontology': value.ontology,
    };
}

