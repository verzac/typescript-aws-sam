export interface AwsEvent {
    resource: string;
    path: string;
    httpMethod: string;
    headers: object;
    queryStringParameters: object;
    pathParameters: object;
    stageVariables: object;
    requestContext: object;
    body: object;
}