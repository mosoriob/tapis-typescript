/* tslint:disable */
/* eslint-disable */
/**
 * Abaco API
 * Abaco (Actor Based Containers) is an API and distributed computing platform funded by the National Science Foundation to provide Functions-as-a-service to the research computing community. Abaco leverages Docker containers and the Actor Model of Concurrent Computation to provide generic function primitives that are portable, composable and scalable.
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
 * @interface MessageJsonResponse
 */
export interface MessageJsonResponse {
    /**
     * the id of the resulting execution.
     * @type {string}
     * @memberof MessageJsonResponse
     */
    executionId?: string;
}

export function MessageJsonResponseFromJSON(json: any): MessageJsonResponse {
    return MessageJsonResponseFromJSONTyped(json, false);
}

export function MessageJsonResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageJsonResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'executionId': !exists(json, 'executionId') ? undefined : json['executionId'],
    };
}

export function MessageJsonResponseToJSON(value?: MessageJsonResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'executionId': value.executionId,
    };
}


