#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTypescriptSampleStack } from '../lib/aws-cdk-typescript-sample-stack';

const app = new cdk.App();
new AwsCdkTypescriptSampleStack(app, 'AwsCdkTypescriptSampleStack');
