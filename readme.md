# Demo Express Gateway

Demo Express Gateway is refered by https://www.express-gateway.io/

This demo is gateway, receiving requests from other service or client and proxy to demo-service.

By default, demo-service is running at http://localhost:3000, which can be defined in `.env` file.

Gateway's configuration file is written by json in `config/`, which is different with official documentation.


# Prepare

Run this command to install all packages:

```
yarn
```

Create a new file named `.env` in the root of project, and copy the content of `.env.example`


# Start

Run this command to start service 

```
yarn start
```


# `.env` file

`.env` file can define the gateway servie's http port and demo-service:

```
# Define http port
GATEWAY_PORT=8080

# Define demo service
DEMO_SERVICE_ENDPOINT=http://localhost:3000
```

