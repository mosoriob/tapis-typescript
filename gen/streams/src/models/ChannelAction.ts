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
 * @interface ChannelAction
 */
export interface ChannelAction {
    /**
     * base url for tenant
     * @type {string}
     * @memberof ChannelAction
     */
    actor_base_url?: string;
    /**
     * actor id
     * @type {string}
     * @memberof ChannelAction
     */
    actor_id?: string;
    /**
     * message posted to the actor
     * @type {string}
     * @memberof ChannelAction
     */
    message?: string;
    /**
     * ACTOR
     * @type {string}
     * @memberof ChannelAction
     */
    method?: string;
    /**
     * Abaco nonces
     * @type {string}
     * @memberof ChannelAction
     */
    nonces?: string;
}

export function ChannelActionFromJSON(json: any): ChannelAction {
    return ChannelActionFromJSONTyped(json, false);
}

export function ChannelActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actor_base_url': !exists(json, 'actor_base_url') ? undefined : json['actor_base_url'],
        'actor_id': !exists(json, 'actor_id') ? undefined : json['actor_id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'nonces': !exists(json, 'nonces') ? undefined : json['nonces'],
    };
}

export function ChannelActionToJSON(value?: ChannelAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actor_base_url': value.actor_base_url,
        'actor_id': value.actor_id,
        'message': value.message,
        'method': value.method,
        'nonces': value.nonces,
    };
}


