# Kinesis

### Reference:

- https://www.amazonaws.cn/en/kinesis/data-streams/faqs/
- https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-kinesis/index.html


## Quick Start

- yarn (or npm install)
- Add Credentials for role `hi-app-dev` `DeveloperAccess` to `config.js` or configure using your keychain
- execute `node demo.js` to send a record to our demo stream

## DataDog
This demo Kinesis Data Stream has a DataDog Firehose configured, you may view logs from the demo here: https://app.datadoghq.com/logs/livetail?query=service%3Aaws%20application-source%3Abrown-bag-demo-distributed&live=true