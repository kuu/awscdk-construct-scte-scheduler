# awscdk-construct-scte-scheduler
[![View on Construct Hub](https://constructs.dev/badge?awscdk-construct-scte-scheduler)](https://constructs.dev/packages/awscdk-construct-scte-scheduler)

AWS CDK Construct for scheduling SCTE-35 events using the MediaLive schedule API
* Input:
  * MediaLive channel id
  * SCTE event duration (seconds)
  * Repeat interval (minutes)
* Output:
  * Lambda function for calling MediaLive schedule API
  * EventBridge rule for periodically invoking the function

## Install
[![NPM](https://nodei.co/npm/awscdk-construct-scte-scheduler.png?mini=true)](https://nodei.co/npm/awscdk-construct-scte-scheduler/)

## Usage
```ts
import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LiveChannelFromMp4 } from 'awscdk-construct-live-channel-from-mp4-file';
import { ScteScheduler } from 'awscdk-construct-scte-scheduler';

export class ExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a live channel (MediaLive + MediaPackage)
    const {eml, emp} = new LiveChannelFromMp4(this, 'LiveChannelFromMp4', {
      sourceUrl: 's3ssl://example_bucket/test.mp4',
      timecodeBurninPrefix: 'Ch1',
      autoStart: true,
    });

    // Schedule a 30-sec ad break every minute
    new ScteScheduler(this, 'ScteScheduler', {
      channelId: eml.channel.ref,
      scteDurationInSeconds: 30,
      intervalInMinutes: 1,
    });

    // Print MediaPackage endpoint URL (HLS)
    new CfnOutput(this, "MediaPackageEndpointURL", {
      value: emp.endpoints.hls.attrUrl,
      exportName: "MediaPackageEndpointURL",
      description: "MediaPackage endpoint URL",
    });
  }
}
```
