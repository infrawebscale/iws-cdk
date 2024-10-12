#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfrawebscaleCdkStack } from '../lib/infrawebscale-cdk-stack';
import { DEFAULT_ACCOUNT, DEFAULT_REGION } from '../constants';

const app = new cdk.App();
console.log(`Default account ${DEFAULT_ACCOUNT} and region: ${DEFAULT_REGION}`);

new InfrawebscaleCdkStack(app, 'InfrawebscaleCdkStack', {
  env: { account: DEFAULT_ACCOUNT, region: DEFAULT_REGION },
});