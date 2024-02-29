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
 * Object with fields that users are allowed to specify for the Volume class.
 * @export
 * @interface NewVolume
 */
export interface NewVolume {
    /**
     * Name of this volume.
     * @type {string}
     * @memberof NewVolume
     */
    volume_id: string;
    /**
     * Description of this volume.
     * @type {string}
     * @memberof NewVolume
     */
    description?: string;
    /**
     * Size in MB to limit volume to. We'll start warning if you've gone past the limit.
     * @type {number}
     * @memberof NewVolume
     */
    size_limit?: number;
}

export function NewVolumeFromJSON(json: any): NewVolume {
    return NewVolumeFromJSONTyped(json, false);
}

export function NewVolumeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewVolume {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'volume_id': json['volume_id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'size_limit': !exists(json, 'size_limit') ? undefined : json['size_limit'],
    };
}

export function NewVolumeToJSON(value?: NewVolume | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'volume_id': value.volume_id,
        'description': value.description,
        'size_limit': value.size_limit,
    };
}

