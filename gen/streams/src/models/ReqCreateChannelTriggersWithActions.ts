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
    ReqCreateChannelAction,
    ReqCreateChannelActionFromJSON,
    ReqCreateChannelActionFromJSONTyped,
    ReqCreateChannelActionToJSON,
    ReqCreateChannelCondition,
    ReqCreateChannelConditionFromJSON,
    ReqCreateChannelConditionFromJSONTyped,
    ReqCreateChannelConditionToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReqCreateChannelTriggersWithActions
 */
export interface ReqCreateChannelTriggersWithActions {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqCreateChannelTriggersWithActions
     */
    inst_ids?: Array<string>;
    /**
     * 
     * @type {ReqCreateChannelCondition}
     * @memberof ReqCreateChannelTriggersWithActions
     */
    condition?: ReqCreateChannelCondition;
    /**
     * 
     * @type {ReqCreateChannelAction}
     * @memberof ReqCreateChannelTriggersWithActions
     */
    action?: ReqCreateChannelAction;
}

export function ReqCreateChannelTriggersWithActionsFromJSON(json: any): ReqCreateChannelTriggersWithActions {
    return ReqCreateChannelTriggersWithActionsFromJSONTyped(json, false);
}

export function ReqCreateChannelTriggersWithActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateChannelTriggersWithActions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inst_ids': !exists(json, 'inst_ids') ? undefined : json['inst_ids'],
        'condition': !exists(json, 'condition') ? undefined : ReqCreateChannelConditionFromJSON(json['condition']),
        'action': !exists(json, 'action') ? undefined : ReqCreateChannelActionFromJSON(json['action']),
    };
}

export function ReqCreateChannelTriggersWithActionsToJSON(value?: ReqCreateChannelTriggersWithActions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inst_ids': value.inst_ids,
        'condition': ReqCreateChannelConditionToJSON(value.condition),
        'action': ReqCreateChannelActionToJSON(value.action),
    };
}

