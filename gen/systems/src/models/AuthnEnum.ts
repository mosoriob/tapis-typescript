/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Systems API
 * The Tapis Systems API provides for management of Tapis Systems including permissions and credentials.
 *
 * The version of the OpenAPI document: 0.0.1
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
export enum AuthnEnum {
    Password = 'PASSWORD',
    PkiKeys = 'PKI_KEYS',
    AccessKey = 'ACCESS_KEY',
    Cert = 'CERT'
}

export function AuthnEnumFromJSON(json: any): AuthnEnum {
    return AuthnEnumFromJSONTyped(json, false);
}

export function AuthnEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthnEnum {
    return json as AuthnEnum;
}

export function AuthnEnumToJSON(value?: AuthnEnum | null): any {
    return value as any;
}

