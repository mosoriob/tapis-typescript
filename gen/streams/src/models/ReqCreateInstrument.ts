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
 * @interface ReqCreateInstrument
 */
export interface ReqCreateInstrument {
    /**
     * Instrument name
     * @type {string}
     * @memberof ReqCreateInstrument
     */
    inst_name: string;
    /**
     * User defined instrument id
     * @type {string}
     * @memberof ReqCreateInstrument
     */
    inst_id: string;
    /**
     * Instrument description
     * @type {string}
     * @memberof ReqCreateInstrument
     */
    inst_description: string;
    /**
     * Instrument category
     * @type {string}
     * @memberof ReqCreateInstrument
     */
    topic_category_id?: string;
    /**
     * tags array
     * @type {Array<string>}
     * @memberof ReqCreateInstrument
     */
    tags?: Array<string>;
    /**
     * User enetered metadata on instruments
     * @type {object}
     * @memberof ReqCreateInstrument
     */
    metadata?: object;
}

export function ReqCreateInstrumentFromJSON(json: any): ReqCreateInstrument {
    return ReqCreateInstrumentFromJSONTyped(json, false);
}

export function ReqCreateInstrumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateInstrument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inst_name': json['inst_name'],
        'inst_id': json['inst_id'],
        'inst_description': json['inst_description'],
        'topic_category_id': !exists(json, 'topic_category_id') ? undefined : json['topic_category_id'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function ReqCreateInstrumentToJSON(value?: ReqCreateInstrument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inst_name': value.inst_name,
        'inst_id': value.inst_id,
        'inst_description': value.inst_description,
        'topic_category_id': value.topic_category_id,
        'tags': value.tags,
        'metadata': value.metadata,
    };
}

