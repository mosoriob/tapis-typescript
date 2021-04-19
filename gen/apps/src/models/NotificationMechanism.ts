/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Applications API
 * The Tapis Applications API provides for management of Tapis applications including permissions.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    NotificationMechanismEnum,
    NotificationMechanismEnumFromJSON,
    NotificationMechanismEnumFromJSONTyped,
    NotificationMechanismEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface NotificationMechanism
 */
export interface NotificationMechanism {
    /**
     * 
     * @type {NotificationMechanismEnum}
     * @memberof NotificationMechanism
     */
    mechanism?: NotificationMechanismEnum;
    /**
     * 
     * @type {string}
     * @memberof NotificationMechanism
     */
    webhookURL?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationMechanism
     */
    emailAddress?: string;
}

export function NotificationMechanismFromJSON(json: any): NotificationMechanism {
    return NotificationMechanismFromJSONTyped(json, false);
}

export function NotificationMechanismFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationMechanism {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mechanism': !exists(json, 'mechanism') ? undefined : NotificationMechanismEnumFromJSON(json['mechanism']),
        'webhookURL': !exists(json, 'webhookURL') ? undefined : json['webhookURL'],
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
    };
}

export function NotificationMechanismToJSON(value?: NotificationMechanism | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mechanism': NotificationMechanismEnumToJSON(value.mechanism),
        'webhookURL': value.webhookURL,
        'emailAddress': value.emailAddress,
    };
}


