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
import {
    Ontology,
    OntologyFromJSON,
    OntologyFromJSONTyped,
    OntologyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RespAddOntology
 */
export interface RespAddOntology {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespAddOntology
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespAddOntology
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespAddOntology
     */
    status?: RespAddOntologyStatusEnum;
    /**
     * 
     * @type {Array<Ontology>}
     * @memberof RespAddOntology
     */
    result?: Array<Ontology>;
}

/**
* @export
* @enum {string}
*/
export enum RespAddOntologyStatusEnum {
    Success = 'success'
}

export function RespAddOntologyFromJSON(json: any): RespAddOntology {
    return RespAddOntologyFromJSONTyped(json, false);
}

export function RespAddOntologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespAddOntology {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : ((json['result'] as Array<any>).map(OntologyFromJSON)),
    };
}

export function RespAddOntologyToJSON(value?: RespAddOntology | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'message': value.message,
        'status': value.status,
        'result': value.result === undefined ? undefined : ((value.result as Array<any>).map(OntologyToJSON)),
    };
}


