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
 * @interface Job
 */
export interface Job {
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    tenant?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    status?: JobStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    lastMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    ended?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    lastUpdated?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    appId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    appVersion?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Job
     */
    archiveOnAppError?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Job
     */
    dynamicExecSystem?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    execSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    execSystemExecDir?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    execSystemInputDir?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    execSystemOutputDir?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    execSystemLogicalQueue?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    archiveSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    archiveSystemDir?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    dtnSystemId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    dtnMountSourcePath?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    dtnMountPoint?: string;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    nodeCount?: number;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    coresPerNode?: number;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    memoryMB?: number;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    maxMinutes?: number;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    fileInputs?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    parameterSet?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    execSystemConstraints?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    subscriptions?: string;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    blockedCount?: number;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteJobId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteJobId2?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteOutcome?: JobRemoteOutcomeEnum;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteResultInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteQueue?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteSubmitted?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteStarted?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteEnded?: string;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    remoteSubmitRetries?: number;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    remoteChecksSuccess?: number;
    /**
     * 
     * @type {number}
     * @memberof Job
     */
    remoteChecksFailed?: number;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    remoteLastStatusCheck?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    inputTransactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    inputCorrelationId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    archiveTransactionId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    archiveCorrelationId?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    tapisQueue?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Job
     */
    visible?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    createdby?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    createdbyTenant?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Job
     */
    tags?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum JobStatusEnum {
    Pending = 'PENDING',
    ProcessingInputs = 'PROCESSING_INPUTS',
    StagingInputs = 'STAGING_INPUTS',
    StagingJob = 'STAGING_JOB',
    SubmittingJob = 'SUBMITTING_JOB',
    Queued = 'QUEUED',
    Running = 'RUNNING',
    Archiving = 'ARCHIVING',
    Blocked = 'BLOCKED',
    Paused = 'PAUSED',
    Finished = 'FINISHED',
    Cancelled = 'CANCELLED',
    Failed = 'FAILED'
}/**
* @export
* @enum {string}
*/
export enum JobRemoteOutcomeEnum {
    Finished = 'FINISHED',
    Failed = 'FAILED',
    FailedSkipArchive = 'FAILED_SKIP_ARCHIVE'
}

export function JobFromJSON(json: any): Job {
    return JobFromJSONTyped(json, false);
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'lastMessage': !exists(json, 'lastMessage') ? undefined : json['lastMessage'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'ended': !exists(json, 'ended') ? undefined : json['ended'],
        'lastUpdated': !exists(json, 'lastUpdated') ? undefined : json['lastUpdated'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'appId': !exists(json, 'appId') ? undefined : json['appId'],
        'appVersion': !exists(json, 'appVersion') ? undefined : json['appVersion'],
        'archiveOnAppError': !exists(json, 'archiveOnAppError') ? undefined : json['archiveOnAppError'],
        'dynamicExecSystem': !exists(json, 'dynamicExecSystem') ? undefined : json['dynamicExecSystem'],
        'execSystemId': !exists(json, 'execSystemId') ? undefined : json['execSystemId'],
        'execSystemExecDir': !exists(json, 'execSystemExecDir') ? undefined : json['execSystemExecDir'],
        'execSystemInputDir': !exists(json, 'execSystemInputDir') ? undefined : json['execSystemInputDir'],
        'execSystemOutputDir': !exists(json, 'execSystemOutputDir') ? undefined : json['execSystemOutputDir'],
        'execSystemLogicalQueue': !exists(json, 'execSystemLogicalQueue') ? undefined : json['execSystemLogicalQueue'],
        'archiveSystemId': !exists(json, 'archiveSystemId') ? undefined : json['archiveSystemId'],
        'archiveSystemDir': !exists(json, 'archiveSystemDir') ? undefined : json['archiveSystemDir'],
        'dtnSystemId': !exists(json, 'dtnSystemId') ? undefined : json['dtnSystemId'],
        'dtnMountSourcePath': !exists(json, 'dtnMountSourcePath') ? undefined : json['dtnMountSourcePath'],
        'dtnMountPoint': !exists(json, 'dtnMountPoint') ? undefined : json['dtnMountPoint'],
        'nodeCount': !exists(json, 'nodeCount') ? undefined : json['nodeCount'],
        'coresPerNode': !exists(json, 'coresPerNode') ? undefined : json['coresPerNode'],
        'memoryMB': !exists(json, 'memoryMB') ? undefined : json['memoryMB'],
        'maxMinutes': !exists(json, 'maxMinutes') ? undefined : json['maxMinutes'],
        'fileInputs': !exists(json, 'fileInputs') ? undefined : json['fileInputs'],
        'parameterSet': !exists(json, 'parameterSet') ? undefined : json['parameterSet'],
        'execSystemConstraints': !exists(json, 'execSystemConstraints') ? undefined : json['execSystemConstraints'],
        'subscriptions': !exists(json, 'subscriptions') ? undefined : json['subscriptions'],
        'blockedCount': !exists(json, 'blockedCount') ? undefined : json['blockedCount'],
        'remoteJobId': !exists(json, 'remoteJobId') ? undefined : json['remoteJobId'],
        'remoteJobId2': !exists(json, 'remoteJobId2') ? undefined : json['remoteJobId2'],
        'remoteOutcome': !exists(json, 'remoteOutcome') ? undefined : json['remoteOutcome'],
        'remoteResultInfo': !exists(json, 'remoteResultInfo') ? undefined : json['remoteResultInfo'],
        'remoteQueue': !exists(json, 'remoteQueue') ? undefined : json['remoteQueue'],
        'remoteSubmitted': !exists(json, 'remoteSubmitted') ? undefined : json['remoteSubmitted'],
        'remoteStarted': !exists(json, 'remoteStarted') ? undefined : json['remoteStarted'],
        'remoteEnded': !exists(json, 'remoteEnded') ? undefined : json['remoteEnded'],
        'remoteSubmitRetries': !exists(json, 'remoteSubmitRetries') ? undefined : json['remoteSubmitRetries'],
        'remoteChecksSuccess': !exists(json, 'remoteChecksSuccess') ? undefined : json['remoteChecksSuccess'],
        'remoteChecksFailed': !exists(json, 'remoteChecksFailed') ? undefined : json['remoteChecksFailed'],
        'remoteLastStatusCheck': !exists(json, 'remoteLastStatusCheck') ? undefined : json['remoteLastStatusCheck'],
        'inputTransactionId': !exists(json, 'inputTransactionId') ? undefined : json['inputTransactionId'],
        'inputCorrelationId': !exists(json, 'inputCorrelationId') ? undefined : json['inputCorrelationId'],
        'archiveTransactionId': !exists(json, 'archiveTransactionId') ? undefined : json['archiveTransactionId'],
        'archiveCorrelationId': !exists(json, 'archiveCorrelationId') ? undefined : json['archiveCorrelationId'],
        'tapisQueue': !exists(json, 'tapisQueue') ? undefined : json['tapisQueue'],
        'visible': !exists(json, 'visible') ? undefined : json['visible'],
        'createdby': !exists(json, 'createdby') ? undefined : json['createdby'],
        'createdbyTenant': !exists(json, 'createdbyTenant') ? undefined : json['createdbyTenant'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function JobToJSON(value?: Job | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'owner': value.owner,
        'tenant': value.tenant,
        'description': value.description,
        'status': value.status,
        'lastMessage': value.lastMessage,
        'created': value.created,
        'ended': value.ended,
        'lastUpdated': value.lastUpdated,
        'uuid': value.uuid,
        'appId': value.appId,
        'appVersion': value.appVersion,
        'archiveOnAppError': value.archiveOnAppError,
        'dynamicExecSystem': value.dynamicExecSystem,
        'execSystemId': value.execSystemId,
        'execSystemExecDir': value.execSystemExecDir,
        'execSystemInputDir': value.execSystemInputDir,
        'execSystemOutputDir': value.execSystemOutputDir,
        'execSystemLogicalQueue': value.execSystemLogicalQueue,
        'archiveSystemId': value.archiveSystemId,
        'archiveSystemDir': value.archiveSystemDir,
        'dtnSystemId': value.dtnSystemId,
        'dtnMountSourcePath': value.dtnMountSourcePath,
        'dtnMountPoint': value.dtnMountPoint,
        'nodeCount': value.nodeCount,
        'coresPerNode': value.coresPerNode,
        'memoryMB': value.memoryMB,
        'maxMinutes': value.maxMinutes,
        'fileInputs': value.fileInputs,
        'parameterSet': value.parameterSet,
        'execSystemConstraints': value.execSystemConstraints,
        'subscriptions': value.subscriptions,
        'blockedCount': value.blockedCount,
        'remoteJobId': value.remoteJobId,
        'remoteJobId2': value.remoteJobId2,
        'remoteOutcome': value.remoteOutcome,
        'remoteResultInfo': value.remoteResultInfo,
        'remoteQueue': value.remoteQueue,
        'remoteSubmitted': value.remoteSubmitted,
        'remoteStarted': value.remoteStarted,
        'remoteEnded': value.remoteEnded,
        'remoteSubmitRetries': value.remoteSubmitRetries,
        'remoteChecksSuccess': value.remoteChecksSuccess,
        'remoteChecksFailed': value.remoteChecksFailed,
        'remoteLastStatusCheck': value.remoteLastStatusCheck,
        'inputTransactionId': value.inputTransactionId,
        'inputCorrelationId': value.inputCorrelationId,
        'archiveTransactionId': value.archiveTransactionId,
        'archiveCorrelationId': value.archiveCorrelationId,
        'tapisQueue': value.tapisQueue,
        'visible': value.visible,
        'createdby': value.createdby,
        'createdbyTenant': value.createdbyTenant,
        'tags': value.tags,
    };
}

