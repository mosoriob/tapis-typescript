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
 * @interface ActorNonce
 */
export interface ActorNonce {
    /**
     * the id of the nonce
     * @type {string}
     * @memberof ActorNonce
     */
    id?: string;
    /**
     * The permission level associated with the nonce.
     * @type {string}
     * @memberof ActorNonce
     */
    level?: ActorNonceLevelEnum;
    /**
     * Max uses for the nonce; set to -1 for unlimited uses.
     * @type {number}
     * @memberof ActorNonce
     */
    maxUses?: number;
    /**
     * the id of the actor
     * @type {string}
     * @memberof ActorNonce
     */
    actorId?: string;
    /**
     * the base URL for this Abaco instance.
     * @type {string}
     * @memberof ActorNonce
     */
    apiServer?: string;
    /**
     * The user who owns the associated actor.
     * @type {string}
     * @memberof ActorNonce
     */
    owner?: string;
    /**
     * Time (in UTC) the nonce was created.
     * @type {string}
     * @memberof ActorNonce
     */
    createTime?: string;
    /**
     * Number of uses remaining for the nonce; set to -1 for unlimited uses.
     * @type {number}
     * @memberof ActorNonce
     */
    remainingUses?: number;
    /**
     * The roles associated with the nonce.
     * @type {Array<string>}
     * @memberof ActorNonce
     */
    roles?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum ActorNonceLevelEnum {
    Read = 'READ',
    Write = 'WRITE',
    Execute = 'EXECUTE'
}

export function ActorNonceFromJSON(json: any): ActorNonce {
    return ActorNonceFromJSONTyped(json, false);
}

export function ActorNonceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorNonce {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'level': !exists(json, 'level') ? undefined : json['level'],
        'maxUses': !exists(json, 'maxUses') ? undefined : json['maxUses'],
        'actorId': !exists(json, 'actorId') ? undefined : json['actorId'],
        'apiServer': !exists(json, 'apiServer') ? undefined : json['apiServer'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'createTime': !exists(json, 'createTime') ? undefined : json['createTime'],
        'remainingUses': !exists(json, 'remainingUses') ? undefined : json['remainingUses'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
    };
}

export function ActorNonceToJSON(value?: ActorNonce | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'level': value.level,
        'maxUses': value.maxUses,
        'actorId': value.actorId,
        'apiServer': value.apiServer,
        'owner': value.owner,
        'createTime': value.createTime,
        'remainingUses': value.remainingUses,
        'roles': value.roles,
    };
}

