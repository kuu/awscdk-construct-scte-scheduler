import * as crypto from 'crypto';
import { Duration } from 'aws-cdk-lib';
import { Schedule, CronOptions } from 'aws-cdk-lib/aws-events';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import {
  StateMachine,
  DefinitionBody,
  Chain,
  Choice,
  Condition,
  Wait,
  WaitTime,
  Pass,
  Succeed,
} from 'aws-cdk-lib/aws-stepfunctions';
import { LambdaInvoke } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { EventBridgeSchedule } from './EventBridgeSchedule';
import { Lambda } from './Lambda';

export interface ScteSchedulerProps {
  readonly channelId: string;
  readonly scteDurationInSeconds: number;
  readonly intervalInMinutes: number;
  readonly cronOptions?: CronOptions;
  readonly repeatCount?: number;
  readonly callback?: IFunction;
}

export class ScteScheduler extends Construct {
  public readonly lambda: Lambda;
  public readonly schedule?: EventBridgeSchedule;

  constructor(scope: Construct, id: string, props: ScteSchedulerProps) {
    super(scope, id);

    const {
      channelId,
      scteDurationInSeconds,
      intervalInMinutes,
      cronOptions,
      repeatCount = Number.MAX_SAFE_INTEGER,
      callback,
    } = props;

    // Create Lambda function to insert SCTE message using the MediaLive schedule API
    this.lambda = new Lambda(this, 'LambdaFunction', {
      channelId,
      scteDurationInSeconds,
    });

    // Create Step Functions state machine to invoke the Lambda function N times
    const invoke = new LambdaInvoke(this, 'Invoke SCTE scheduler Lambda function', {
      lambdaFunction: this.lambda.func,
      inputPath: '$.Payload',
    });
    const wait1 = new Wait(this, `Wait for ${intervalInMinutes}-min`, {
      time: WaitTime.duration(Duration.minutes(intervalInMinutes)),
    });
    const wait2 = new Wait(this, `Wait for ${intervalInMinutes * 60 + scteDurationInSeconds}-sec`, {
      time: WaitTime.duration(Duration.seconds(intervalInMinutes * 60 + scteDurationInSeconds)),
    });
    const lastTask = callback ? new LambdaInvoke(this, 'Callback', {
      lambdaFunction: callback,
    }) : new Succeed(this, 'Done');
    const stateMachine = new StateMachine(this, 'StateMachine', {
      definitionBody: DefinitionBody.fromChainable(
        Chain.start(
          new Pass(this, 'Start', { parameters: { Payload: { i: 0 } } }),
        )
          .next(wait1)
          .next(invoke)
          .next(
            new Choice(this, `Check if repaeted ${repeatCount} times`)
              .when(
                Condition.numberLessThan('$.Payload.i', repeatCount),
                wait1,
              )
              .otherwise(
                Chain.start(wait2).next(lastTask),
              ),
          ),
      ),
    });
    if (cronOptions) {
      // Create EventBridge rule to invoke the Lambda function every N minutes
      this.schedule = new EventBridgeSchedule(this, 'EventBridgeSchedule', {
        target: stateMachine,
        schedule: Schedule.cron(cronOptions),
      });
    } else {
      // Start the execution of the state machine immediately
      new AwsCustomResource(scope, 'StartStateMachine', {
        onCreate: {
          service: 'StepFunctions',
          action: 'StartExecution',
          parameters: {
            stateMachineArn: stateMachine.stateMachineArn,
            input: '{ "Payload": { "i": 0 } }',
          },
          physicalResourceId: PhysicalResourceId.of(`${crypto.randomUUID()}`),
        },
        //Will ignore any resource and use the assumedRoleArn as resource and 'sts:AssumeRole' for service:action
        policy: AwsCustomResourcePolicy.fromSdkCalls({
          resources: AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      });
    }
  }
}
