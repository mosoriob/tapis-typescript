/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.2.0
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
export enum EnumIdentityType {
    Github = 'github',
    Dockerhub = 'dockerhub'
}

export function EnumIdentityTypeFromJSON(json: any): EnumIdentityType {
    return EnumIdentityTypeFromJSONTyped(json, false);
}

export function EnumIdentityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumIdentityType {
    return json as EnumIdentityType;
}

export function EnumIdentityTypeToJSON(value?: EnumIdentityType | null): any {
    return value as any;
}
