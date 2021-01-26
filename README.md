# 🚲 Serverless Peloton API

A Serverless Node API to interact with your Peloton data built with:

1. DataStax Astra Serverless Cassandra Database
2. DataStax Astra Document API
3. AWS Lambdas
4. Peloton API
5. Typescript

## Getting Started:

1. Install the Serverless cli: `npm install -g serverless`
2. Install node modules: `npm install`
3. Rename `.env.sample` -> `.env`, fill out all the environments
4. Load Peloton data into your Astra Serverless database by running `node scripts/loadPelotonData.js`
5. Deploy your app by running `serverless deploy`
