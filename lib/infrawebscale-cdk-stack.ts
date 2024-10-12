import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { HOSTING_BUCKET_NAME } from '../constants';

export class InfrawebscaleCdkStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;
  
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.bucket = new s3.Bucket(this, HOSTING_BUCKET_NAME, {
      versioned: false,
      bucketName: HOSTING_BUCKET_NAME,
      autoDeleteObjects: true,
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error/index.html',
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}
