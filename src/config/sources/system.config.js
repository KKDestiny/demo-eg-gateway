/*
 * @Date: 2020-12-18 22:44:05
 * @LastEditors: linxiaozhou.com
 * @Description: Description
 */
export const systemConfig = {
  db: {
    redis: {
      emulate: true,
      namespace: "EG",
    },
  },
  plugins: {
    "express-gateway-plugin-logger": {
      param: "Logger",
      package: "./plugins/logger/manifest.js",
    },
  },
  crypto: {
    cipherKey: "sensitiveKey",
    algorithm: "aes256",
    saltRounds: 10,
  },
  session: {
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  },
  accessTokens: {
    timeToExpiry: 7200000,
  },
  refreshTokens: {
    timeToExpiry: 7200000,
  },
  authorizationCodes: {
    timeToExpiry: 300000,
  },
};
