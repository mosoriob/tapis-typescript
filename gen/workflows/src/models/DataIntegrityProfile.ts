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

import {
    ByteCheckDataIntegrityProfile,
    ChecksumDataIntegrityProfile,
    DoneFileDataIntegrityProfile,
    ByteCheckDataIntegrityProfileFromJSONTyped,
    ByteCheckDataIntegrityProfileToJSON,
    ChecksumDataIntegrityProfileFromJSONTyped,
    ChecksumDataIntegrityProfileToJSON,
    DoneFileDataIntegrityProfileFromJSONTyped,
    DoneFileDataIntegrityProfileToJSON,
	ETLEnumDataIntegrityType
} from './';

/**
 * @type DataIntegrityProfile
 * 
 * @export
 */
export type DataIntegrityProfile = { type: ETLEnumDataIntegrityType.ByteCheck } & ByteCheckDataIntegrityProfile | { type: 'checksum' } & ChecksumDataIntegrityProfile | { type: ETLEnumDataIntegrityType.DoneFile } & DoneFileDataIntegrityProfile;

export function DataIntegrityProfileFromJSON(json: any): DataIntegrityProfile {
    return DataIntegrityProfileFromJSONTyped(json, false);
}

export function DataIntegrityProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataIntegrityProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case ETLEnumDataIntegrityType.ByteCheck:
            return {...ByteCheckDataIntegrityProfileFromJSONTyped(json, true), type: ETLEnumDataIntegrityType.ByteCheck};
        case 'checksum':
            return {...ChecksumDataIntegrityProfileFromJSONTyped(json, true), type: 'checksum'};
        case ETLEnumDataIntegrityType.DoneFile:
            return {...DoneFileDataIntegrityProfileFromJSONTyped(json, true), type: ETLEnumDataIntegrityType.DoneFile};
        default:
            throw new Error(`No variant of DataIntegrityProfile exists with 'type=${json['type']}'`);
    }
}

export function DataIntegrityProfileToJSON(value?: DataIntegrityProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case ETLEnumDataIntegrityType.ByteCheck:
            return ByteCheckDataIntegrityProfileToJSON(<ByteCheckDataIntegrityProfile>value);
        case 'checksum':
            return ChecksumDataIntegrityProfileToJSON(<ChecksumDataIntegrityProfile>value);
        case ETLEnumDataIntegrityType.DoneFile:
            return DoneFileDataIntegrityProfileToJSON(<DoneFileDataIntegrityProfile>value);
        default:
            throw new Error(`No variant of DataIntegrityProfile exists with 'type=${value['type']}'`);
    }
}

