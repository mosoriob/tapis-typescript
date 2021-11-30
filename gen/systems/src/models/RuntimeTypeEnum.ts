/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions, credentials and Scheduler Profiles.
 *
 * The version of the OpenAPI document: 1.0.0-rc1
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum RuntimeTypeEnum {
    Docker = 'DOCKER',
    Singularity = 'SINGULARITY'
}

export function RuntimeTypeEnumFromJSON(json: any): RuntimeTypeEnum {
    return RuntimeTypeEnumFromJSONTyped(json, false);
}

export function RuntimeTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeTypeEnum {
    return json as RuntimeTypeEnum;
}

export function RuntimeTypeEnumToJSON(value?: RuntimeTypeEnum | null): any {
    return value as any;
}

