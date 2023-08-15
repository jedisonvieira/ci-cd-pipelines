const { Stack, App } = require("aws-cdk-lib");
const { Function, Runtime, Code } = require("aws-cdk-lib/aws-lambda");
const { RestApi, LambdaIntegration } = require("aws-cdk-lib/aws-apigateway");

class CloudformationStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = new App();
    const nameSpace = process.env.NAMESPACE;
    const stack = new Stack(app, `Stack-${nameSpace}`);

    const environmentFn = new Function(stack, `Environment - ${nameSpace}`, {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset("lambda"),
      handler: "environment.handler",
    });

    const api = new RestApi(stack, "Api", {
      restApiName: `Api${nameSpace}`,
    });

    const enviroments = api.root.addResource("enviroments");
    const environment = enviroments.addResource(`${nameSpace}`);
    environment.addMethod("GET", new LambdaIntegration(environmentFn));
  }
}

module.exports = { CloudformationStack };
