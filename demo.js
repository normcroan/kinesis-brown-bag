// reference: https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-implementation-app-nodejs.html

const { KinesisClient, PutRecordCommand } = require("@aws-sdk/client-kinesis");
const { credentials } = require("./sensitive/config");

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

putRecord("say hi!");
