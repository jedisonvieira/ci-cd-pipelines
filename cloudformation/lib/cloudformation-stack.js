const { Stack } = require("aws-cdk-lib");
const { Function, Runtime, Code } = require("aws-cdk-lib/aws-lambda");
const { RestApi, LambdaIntegration } = require("aws-cdk-lib/aws-apigateway");
const envConfig = require('../env');

class CloudformationStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    console.log(envConfig.env)
    const environmentFn = new Function(this, "Environment", {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset("lambda"),
      handler: "environment.handler",
    });

    const api = new RestApi(this, "EnvironmentApi", {
      restApiName: "EnvironmentApi",
    });

    const enviroments = api.root.addResource("enviroments");
    const environment = enviroments.addResource(`${process.env.NAMESPACE}`);
    environment.addMethod("GET", new LambdaIntegration(environmentFn));
  }
}

module.exports = { CloudformationStack };
