/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Pods Service
 *  The Pods Service is a web service and distributed computing platform providing pods-as-a-service (PaaS). The service  implements a message broker and processor model that requests pods, alongside a health module to poll for pod data, including logs, status, and health. The primary use of this service is to have quick to deploy long-lived services based on Docker images that are exposed via HTTP or TCP endpoints listed by the API.  **The Pods service provides functionality for two types of pod solutions:**  * **Templated Pods** for run-as-is popular images. Neo4J is one example, the template manages TCP ports, user creation, and permissions.  * **Custom Pods** for arbitrary docker images with less functionality. In this case we will expose port 5000 and do nothing else.   The live-docs act as the most up-to-date API reference. Visit the [documentation for more information](https://tapis.readthedocs.io/en/latest/technical/pods.html). 
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    VolumeResponseModel,
    VolumeResponseModelFromJSON,
    VolumeResponseModelFromJSONTyped,
    VolumeResponseModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface VolumesResponse
 */
export interface VolumesResponse {
    /**
     * 
     * @type {string}
     * @memberof VolumesResponse
     */
    message: string;
    /**
     * 
     * @type {object}
     * @memberof VolumesResponse
     */
    metadata: object;
    /**
     * 
     * @type {Array<VolumeResponseModel>}
     * @memberof VolumesResponse
     */
    result: Array<VolumeResponseModel>;
    /**
     * 
     * @type {string}
     * @memberof VolumesResponse
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof VolumesResponse
     */
    version: string;
}

export function VolumesResponseFromJSON(json: any): VolumesResponse {
    return VolumesResponseFromJSONTyped(json, false);
}

export function VolumesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VolumesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'metadata': json['metadata'],
        'result': ((json['result'] as Array<any>).map(VolumeResponseModelFromJSON)),
        'status': json['status'],
        'version': json['version'],
    };
}

export function VolumesResponseToJSON(value?: VolumesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'metadata': value.metadata,
        'result': ((value.result as Array<any>).map(VolumeResponseModelToJSON)),
        'status': value.status,
        'version': value.version,
    };
}

