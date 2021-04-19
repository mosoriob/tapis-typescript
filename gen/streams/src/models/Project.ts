/* tslint:disable */
/* eslint-disable */
/**
 * Streams API
 * Manage Tapis Streams API.
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
 * @interface Project
 */
export interface Project {
    /**
     * Project name
     * @type {string}
     * @memberof Project
     */
    project_name?: string;
    /**
     * The unique identifier for project
     * @type {string}
     * @memberof Project
     */
    project_uuid?: string;
    /**
     * The owner of project
     * @type {string}
     * @memberof Project
     */
    owner?: string;
    /**
     * Funding for the project.
     * @type {string}
     * @memberof Project
     */
    funding_resource?: string;
    /**
     * Principal investigator
     * @type {string}
     * @memberof Project
     */
    pi?: string;
    /**
     * url of the project
     * @type {string}
     * @memberof Project
     */
    project_url?: string;
    /**
     * Current status of the project
     * @type {boolean}
     * @memberof Project
     */
    active?: boolean;
    /**
     * User defined metadata for the site
     * @type {object}
     * @memberof Project
     */
    metadata?: object;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'project_name': !exists(json, 'project_name') ? undefined : json['project_name'],
        'project_uuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'funding_resource': !exists(json, 'funding_resource') ? undefined : json['funding_resource'],
        'pi': !exists(json, 'pi') ? undefined : json['pi'],
        'project_url': !exists(json, 'project_url') ? undefined : json['project_url'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function ProjectToJSON(value?: Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_name': value.project_name,
        'project_uuid': value.project_uuid,
        'owner': value.owner,
        'funding_resource': value.funding_resource,
        'pi': value.pi,
        'project_url': value.project_url,
        'active': value.active,
        'metadata': value.metadata,
    };
}


