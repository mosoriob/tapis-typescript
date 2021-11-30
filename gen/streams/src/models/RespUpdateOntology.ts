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
 * @interface RespUpdateOntology
 */
export interface RespUpdateOntology {
    /**
     * Version of the API
     * @type {string}
     * @memberof RespUpdateOntology
     */
    version?: string;
    /**
     * Brief description of the response
     * @type {string}
     * @memberof RespUpdateOntology
     */
    message?: string;
    /**
     * Whether the request was a success or failure.
     * @type {string}
     * @memberof RespUpdateOntology
     */
    status?: RespUpdateOntologyStatusEnum;
    /**
     * 
     * @type {Ontology}
     * @memberof RespUpdateOntology
     */
    result?: Ontology;
}

/**
* @export
* @enum {string}
*/
export enum RespUpdateOntologyStatusEnum {
    Success = 'success'
}

export function RespUpdateOntologyFromJSON(json: any): RespUpdateOntology {
    return RespUpdateOntologyFromJSONTyped(json, false);
}

export function RespUpdateOntologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): RespUpdateOntology {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'result': !exists(json, 'result') ? undefined : OntologyFromJSON(json['result']),
    };
}

export function RespUpdateOntologyToJSON(value?: RespUpdateOntology | null): any {
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
        'result': OntologyToJSON(value.result),
    };
}

