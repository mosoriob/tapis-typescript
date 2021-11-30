/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Jobs API
 * The Tapis Jobs API executes jobs on Tapis systems.
 *
 * The version of the OpenAPI document: 0.1
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
 * @interface JobsProbe
 */
export interface JobsProbe {
    /**
     * 
     * @type {number}
     * @memberof JobsProbe
     */
    checkNum?: number;
    /**
     * 
     * @type {boolean}
     * @memberof JobsProbe
     */
    databaseAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JobsProbe
     */
    tenantsAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JobsProbe
     */
    queueAccess?: boolean;
}

export function JobsProbeFromJSON(json: any): JobsProbe {
    return JobsProbeFromJSONTyped(json, false);
}

export function JobsProbeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobsProbe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checkNum': !exists(json, 'checkNum') ? undefined : json['checkNum'],
        'databaseAccess': !exists(json, 'databaseAccess') ? undefined : json['databaseAccess'],
        'tenantsAccess': !exists(json, 'tenantsAccess') ? undefined : json['tenantsAccess'],
        'queueAccess': !exists(json, 'queueAccess') ? undefined : json['queueAccess'],
    };
}

export function JobsProbeToJSON(value?: JobsProbe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checkNum': value.checkNum,
        'databaseAccess': value.databaseAccess,
        'tenantsAccess': value.tenantsAccess,
        'queueAccess': value.queueAccess,
    };
}

