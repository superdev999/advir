<?php

use Aws\Laravel\AwsServiceProvider;

return [

    /*
    |--------------------------------------------------------------------------
    | AWS SDK Configuration
    |--------------------------------------------------------------------------
    |
    | The configuration options set in this file will be passed directly to the
    | `Aws\Sdk` object, from which all client objects are created. The minimum
    | required options are declared here, but the full set of possible options
    | are documented at:
    | http://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/configuration.html
    |
    */
    'credentials' => [
        'key' => env('AWS_KEY', 'AKIAIXXZW47YRHEO2BTA'),
        'secret' => env('AWS_SECRET', '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'),
    ],

    'region' => env('AWS_REGION', 'us-east-2'),
    'version' => 'latest',
    'ua_append' => [
        'L5MOD/' . AwsServiceProvider::VERSION,
    ],
];
