import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.200.1',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.9',
  name: 'awscdk-construct-scte-scheduler',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kuu/awscdk-construct-scte-scheduler.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'MediaLive',
    'SCTE',
    'Lambda',
    'EventBridge',
  ],
  license: 'MIT',
  licensed: true,

  deps: ['aws-cdk-lib', 'constructs'],
  bundledDeps: ['@aws-sdk/client-medialive'],
  description: 'AWS CDK Construct for scheduling SCTE-35 events using the MediaLive schedule API',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
