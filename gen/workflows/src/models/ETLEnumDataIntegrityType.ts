/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Workflows API
 * Create and manage pipelines
 *
 * The version of the OpenAPI document: 1.6.0
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
export enum ETLEnumDataIntegrityType {
    Checksum = 'checksum',
    ByteCheck = 'byte_check',
    DoneFile = 'done_file'
}

export function ETLEnumDataIntegrityTypeFromJSON(json: any): ETLEnumDataIntegrityType {
    return ETLEnumDataIntegrityTypeFromJSONTyped(json, false);
}

export function ETLEnumDataIntegrityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETLEnumDataIntegrityType {
    return json as ETLEnumDataIntegrityType;
}

export function ETLEnumDataIntegrityTypeToJSON(value?: ETLEnumDataIntegrityType | null): any {
    return value as any;
}

