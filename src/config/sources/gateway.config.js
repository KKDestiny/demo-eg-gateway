/*
 * @Date: 2021-01-21 22:58:31
 * @LastEditors: linxiaozhou.com
 * @Description: Description
 */
export const gatewayConfig = {
  http: {
    port: "${GATEWAY_PORT:-8080}",
  },
  admin: {
    port: 9876,
    host: "localhost",
  },
  apiEndpoints: {
    "demo-service": {
      host: "*",
    },
  },
  serviceEndpoints: {
    "demo-service": {
      url: "${DEMO_SERVICE_ENDPOINT:-http://localhost:3000}",
    },
  },
  policies: ["basic-auth", "cors", "expression", "key-auth", "log", "oauth2", "proxy", "logger", "rate-limit"],

  pipelines: {
    "demo-service": {
      apiEndpoints: ["demo-service"],
      policies: [
        {
          logger: {
            action: {
              param: "log request",
            },
          },
        },
        {
          proxy: [
            {
              action: {
                serviceEndpoint: "demo-service",
                changeOrigin: true,
              },
            },
          ],
        },
      ],
    },
  },
};
