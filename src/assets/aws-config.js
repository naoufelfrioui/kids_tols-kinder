// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const aws_app_analytics = 'enable';
const aws_cognito_identity_pool_id = 'us-east-1:8723e9ee-05c9-4520-97a0-8fcc1eb5eac9';
const aws_cognito_region = 'us-east-1';
const aws_content_delivery = 'enable';
const aws_content_delivery_bucket = 'mobilehubproject-hosting-mobilehub-845328772';
const aws_content_delivery_bucket_region = 'us-east-1';
const aws_content_delivery_cloudfront = 'enable';
const aws_content_delivery_cloudfront_domain = 'd12doxdhdv6i5m.cloudfront.net';
const aws_dynamodb = 'enable';
const aws_dynamodb_all_tables_region = 'us-east-1';
const aws_dynamodb_table_schemas = '[{"tableName":"ionic-mobile-hub-tasks","attributes":[{"name":"userId","type":"S"},{"name":"taskId","type":"S"},{"name":"category","type":"S"},{"name":"created","type":"N"},{"name":"description","type":"S"}],"indexes":[{"indexName":"DateSorted","hashKey":"userId","rangeKey":"created"}],"region":"us-east-1","hashKey":"userId","rangeKey":"taskId"}]';
const aws_mobile_analytics_app_id = '452722d7cdee42d19df13d5bbb7cf0b2';
const aws_project_id = '05ba4505-e52d-4d55-a5ff-7e2013e3b608';
const aws_project_name = 'mobile-hub-project';
const aws_project_region = 'us-east-1';
const aws_push_pinpoint = 'enable';
const aws_resource_name_prefix = 'mobilehubproject-mobilehub-845328772';
const aws_sign_in_enabled = 'enable';
const aws_user_files = 'enable';
const aws_user_files_s3_bucket = 'mobilehubproject-userfiles-mobilehub-845328772';
const aws_user_files_s3_bucket_region = 'us-east-1';
const aws_user_pools = 'enable';
const aws_user_pools_id = 'us-east-1_UWu6kChdE';
const aws_user_pools_mfa_type = 'OFF';
const aws_user_pools_web_client_id = '2sq9q82koe6hcudn125vnfj03u';
const aws_user_settings = 'enable';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
});
AWS.config.update({customUserAgent: 'MobileHub v0.1'});