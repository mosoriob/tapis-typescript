/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
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
 * @interface TransferTaskRequestElement
 */
export interface TransferTaskRequestElement {
    /**
     * 
     * @type {string}
     * @memberof TransferTaskRequestElement
     */
    sourceURI: string;
    /**
     * 
     * @type {string}
     * @memberof TransferTaskRequestElement
     */
    destinationURI: string;
    /**
     * Allow the full transfer to succeed even if this portion fails? Default is false
     * @type {boolean}
     * @memberof TransferTaskRequestElement
     */
    optional?: boolean;
}

export function TransferTaskRequestElementFromJSON(json: any): TransferTaskRequestElement {
    return TransferTaskRequestElementFromJSONTyped(json, false);
}

export function TransferTaskRequestElementFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTaskRequestElement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceURI': json['sourceURI'],
        'destinationURI': json['destinationURI'],
        'optional': !exists(json, 'optional') ? undefined : json['optional'],
    };
}

export function TransferTaskRequestElementToJSON(value?: TransferTaskRequestElement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sourceURI': value.sourceURI,
        'destinationURI': value.destinationURI,
        'optional': value.optional,
    };
}


