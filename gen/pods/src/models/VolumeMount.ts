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
/**
 * 
 * @export
 * @interface VolumeMount
 */
export interface VolumeMount {
    /**
     * Type of volume to attach.
     * @type {string}
     * @memberof VolumeMount
     */
    type?: string;
    /**
     * Path to mount volume to.
     * @type {string}
     * @memberof VolumeMount
     */
    mount_path?: string;
    /**
     * Path to mount volume to.
     * @type {string}
     * @memberof VolumeMount
     */
    sub_path?: string;
}

export function VolumeMountFromJSON(json: any): VolumeMount {
    return VolumeMountFromJSONTyped(json, false);
}

export function VolumeMountFromJSONTyped(json: any, ignoreDiscriminator: boolean): VolumeMount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'mount_path': !exists(json, 'mount_path') ? undefined : json['mount_path'],
        'sub_path': !exists(json, 'sub_path') ? undefined : json['sub_path'],
    };
}

export function VolumeMountToJSON(value?: VolumeMount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'mount_path': value.mount_path,
        'sub_path': value.sub_path,
    };
}

