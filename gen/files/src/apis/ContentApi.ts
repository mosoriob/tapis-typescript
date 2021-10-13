/* tslint:disable */
/* eslint-disable */
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    HeaderByteRange,
    HeaderByteRangeFromJSON,
    HeaderByteRangeToJSON,
} from '../models';

export interface GetContentsRequest {
    systemId: string;
    path: string;
    range?: HeaderByteRange;
    zip?: boolean;
    more?: number;
}

/**
 * 
 */
export class ContentApi extends runtime.BaseAPI {

    /**
     * Get file contents/serve file
     * Retrieve a file from the files service
     */
    async getContentsRaw(requestParameters: GetContentsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.systemId === null || requestParameters.systemId === undefined) {
            throw new runtime.RequiredError('systemId','Required parameter requestParameters.systemId was null or undefined when calling getContents.');
        }

        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling getContents.');
        }

        const queryParameters: any = {};

        if (requestParameters.zip !== undefined) {
            queryParameters['zip'] = requestParameters.zip;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.range !== undefined && requestParameters.range !== null) {
            headerParameters['range'] = String(requestParameters.range);
        }

        if (requestParameters.more !== undefined && requestParameters.more !== null) {
            headerParameters['more'] = String(requestParameters.more);
        }

        const response = await this.request({
            path: `/v3/files/content/{systemId}/{path}`.replace(`{${"systemId"}}`, encodeURIComponent(String(requestParameters.systemId))).replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get file contents/serve file
     * Retrieve a file from the files service
     */
    async getContents(requestParameters: GetContentsRequest): Promise<void> {
        await this.getContentsRaw(requestParameters);
    }

}
