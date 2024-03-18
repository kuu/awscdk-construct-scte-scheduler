# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventBridgeSchedule <a name="EventBridgeSchedule" id="awscdk-construct-scte-scheduler.EventBridgeSchedule"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-scte-scheduler'

new EventBridgeSchedule(scope: Construct, id: string, props: EventBridgeScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-scte-scheduler.EventBridgeScheduleProps">EventBridgeScheduleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-scte-scheduler.EventBridgeScheduleProps">EventBridgeScheduleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.isConstruct"></a>

```typescript
import { EventBridgeSchedule } from 'awscdk-construct-scte-scheduler'

EventBridgeSchedule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `rule`<sup>Required</sup> <a name="rule" id="awscdk-construct-scte-scheduler.EventBridgeSchedule.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---


### Lambda <a name="Lambda" id="awscdk-construct-scte-scheduler.Lambda"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-scte-scheduler.Lambda.Initializer"></a>

```typescript
import { Lambda } from 'awscdk-construct-scte-scheduler'

new Lambda(scope: Construct, id: string, props: LambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-scte-scheduler.LambdaProps">LambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-scte-scheduler.Lambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-scte-scheduler.Lambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-scte-scheduler.Lambda.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-scte-scheduler.LambdaProps">LambdaProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-scte-scheduler.Lambda.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-scte-scheduler.Lambda.isConstruct"></a>

```typescript
import { Lambda } from 'awscdk-construct-scte-scheduler'

Lambda.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-scte-scheduler.Lambda.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-scte-scheduler.Lambda.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-scte-scheduler.Lambda.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-scte-scheduler.Lambda.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---


### ScteScheduler <a name="ScteScheduler" id="awscdk-construct-scte-scheduler.ScteScheduler"></a>

#### Initializers <a name="Initializers" id="awscdk-construct-scte-scheduler.ScteScheduler.Initializer"></a>

```typescript
import { ScteScheduler } from 'awscdk-construct-scte-scheduler'

new ScteScheduler(scope: Construct, id: string, props: ScteSchedulerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.Initializer.parameter.props">props</a></code> | <code><a href="#awscdk-construct-scte-scheduler.ScteSchedulerProps">ScteSchedulerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="awscdk-construct-scte-scheduler.ScteScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="awscdk-construct-scte-scheduler.ScteScheduler.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="awscdk-construct-scte-scheduler.ScteScheduler.Initializer.parameter.props"></a>

- *Type:* <a href="#awscdk-construct-scte-scheduler.ScteSchedulerProps">ScteSchedulerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="awscdk-construct-scte-scheduler.ScteScheduler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="awscdk-construct-scte-scheduler.ScteScheduler.isConstruct"></a>

```typescript
import { ScteScheduler } from 'awscdk-construct-scte-scheduler'

ScteScheduler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="awscdk-construct-scte-scheduler.ScteScheduler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.property.lambda">lambda</a></code> | <code><a href="#awscdk-construct-scte-scheduler.Lambda">Lambda</a></code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.ScteScheduler.property.schedule">schedule</a></code> | <code><a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule">EventBridgeSchedule</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="awscdk-construct-scte-scheduler.ScteScheduler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="awscdk-construct-scte-scheduler.ScteScheduler.property.lambda"></a>

```typescript
public readonly lambda: Lambda;
```

- *Type:* <a href="#awscdk-construct-scte-scheduler.Lambda">Lambda</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="awscdk-construct-scte-scheduler.ScteScheduler.property.schedule"></a>

```typescript
public readonly schedule: EventBridgeSchedule;
```

- *Type:* <a href="#awscdk-construct-scte-scheduler.EventBridgeSchedule">EventBridgeSchedule</a>

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeScheduleProps <a name="EventBridgeScheduleProps" id="awscdk-construct-scte-scheduler.EventBridgeScheduleProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-scte-scheduler.EventBridgeScheduleProps.Initializer"></a>

```typescript
import { EventBridgeScheduleProps } from 'awscdk-construct-scte-scheduler'

const eventBridgeScheduleProps: EventBridgeScheduleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeScheduleProps.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.EventBridgeScheduleProps.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |

---

##### `func`<sup>Required</sup> <a name="func" id="awscdk-construct-scte-scheduler.EventBridgeScheduleProps.property.func"></a>

```typescript
public readonly func: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="awscdk-construct-scte-scheduler.EventBridgeScheduleProps.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

### LambdaProps <a name="LambdaProps" id="awscdk-construct-scte-scheduler.LambdaProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-scte-scheduler.LambdaProps.Initializer"></a>

```typescript
import { LambdaProps } from 'awscdk-construct-scte-scheduler'

const lambdaProps: LambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.LambdaProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.LambdaProps.property.scteDurationInSeconds">scteDurationInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-scte-scheduler.LambdaProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `scteDurationInSeconds`<sup>Required</sup> <a name="scteDurationInSeconds" id="awscdk-construct-scte-scheduler.LambdaProps.property.scteDurationInSeconds"></a>

```typescript
public readonly scteDurationInSeconds: number;
```

- *Type:* number

---

### ScteSchedulerProps <a name="ScteSchedulerProps" id="awscdk-construct-scte-scheduler.ScteSchedulerProps"></a>

#### Initializer <a name="Initializer" id="awscdk-construct-scte-scheduler.ScteSchedulerProps.Initializer"></a>

```typescript
import { ScteSchedulerProps } from 'awscdk-construct-scte-scheduler'

const scteSchedulerProps: ScteSchedulerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#awscdk-construct-scte-scheduler.ScteSchedulerProps.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.ScteSchedulerProps.property.intervalInMinutes">intervalInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#awscdk-construct-scte-scheduler.ScteSchedulerProps.property.scteDurationInSeconds">scteDurationInSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="awscdk-construct-scte-scheduler.ScteSchedulerProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="awscdk-construct-scte-scheduler.ScteSchedulerProps.property.intervalInMinutes"></a>

```typescript
public readonly intervalInMinutes: number;
```

- *Type:* number

---

##### `scteDurationInSeconds`<sup>Required</sup> <a name="scteDurationInSeconds" id="awscdk-construct-scte-scheduler.ScteSchedulerProps.property.scteDurationInSeconds"></a>

```typescript
public readonly scteDurationInSeconds: number;
```

- *Type:* number

---



