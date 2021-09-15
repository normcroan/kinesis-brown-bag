// reference: https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-implementation-app-nodejs.html

const { KinesisClient, PutRecordCommand } = require("@aws-sdk/client-kinesis");
const AWS = require("aws-sdk");
// NOTE: This may be used for testing if you cannot configure your local hi-app-dev profile
// const { credentials } = require('./sensitive/config');

// If you already have your hi-app-dev DeveloperAccess role setup in ~/.aws
// Scripts for this:
  // devops-aws/auth hi-app-dev DeveloperAccess
  // provider/scripts/dev/aws_auth hi-app-dev DeveloperAccess
const credentials = new AWS.SharedIniFileCredentials({
  profile: "hi-app-dev-DeveloperAccess",
});

const client = new KinesisClient({
  credentials,
  region: "us-east-1",
});

const putRecord = async (record) => {
  const command = new PutRecordCommand({
    Data: Buffer.from(`${JSON.stringify({ record })}\n`),
    PartitionKey: "brownBag",
    StreamName: "brown-bag-demo",
  });
  const response = await client.send(command);
  console.log(response);
};

putRecord(`hello!!!`);
