#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { CloudformationStack } = require("../lib/cloudformation-stack");

const app = new cdk.App();
new CloudformationStack(app, "CloudformationStack", {});
