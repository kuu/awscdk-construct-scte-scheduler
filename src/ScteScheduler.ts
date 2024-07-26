import { Duration } from 'aws-cdk-lib';
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
import { Construct } from 'constructs';
import { EventBridgeSchedule } from './EventBridgeSchedule';
import { Lambda } from './Lambda';

export interface ScteSchedulerProps {
  readonly channelId: string;
  readonly scteDurationInSeconds: number;
  readonly intervalInMinutes: number;
  readonly repeatCount?: number;
  readonly callback?: IFunction;
}

export class ScteScheduler extends Construct {
  public readonly lambda: Lambda;
  public readonly schedule: EventBridgeSchedule | StateMachine;

  constructor(scope: Construct, id: string, props: ScteSchedulerProps) {
    super(scope, id);

    const {
      channelId,
      scteDurationInSeconds,
      intervalInMinutes,
      repeatCount = 0, // 0 means infinite loop
      callback,
    } = props;

    // Create Lambda function to insert SCTE message using the MediaLive schedule API
    this.lambda = new Lambda(this, 'LambdaFunction', {
      channelId,
      scteDurationInSeconds,
    });

    if (repeatCount <= 0) {
      // Create EventBridge rule to invoke the Lambda function every N minutes
      this.schedule = new EventBridgeSchedule(this, 'EventBridgeSchedule', {
        func: this.lambda.func,
        intervalInMinutes,
      });
    } else {
      // Create Step Functions state machine to invoke the Lambda function N times
      const invoke = new LambdaInvoke(this, 'Invoke with empty object as payload', {
        lambdaFunction: this.lambda.func,
        inputPath: '$.Payload',
      });
      const wait = new Wait(this, 'Wait', {
        time: WaitTime.duration(Duration.minutes(intervalInMinutes)),
      });
      const lastTask = callback ? new LambdaInvoke(this, 'Callback', {
        lambdaFunction: callback,
      }) : new Succeed(this, 'Done');
      this.schedule = new StateMachine(this, 'StateMachine', {
        definitionBody: DefinitionBody.fromChainable(
          Chain.start(
            new Pass(this, 'Start', { parameters: { Payload: { i: 0 } } }),
          )
            .next(wait)
            .next(invoke)
            .next(
              new Choice(this, 'Choice')
                .when(
                  Condition.numberLessThan('$.Payload.i', repeatCount),
                  wait,
                )
                .otherwise(lastTask),
            ),
        ),
      });
    }
  }
}