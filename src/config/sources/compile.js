/*
 * @Date: 2021-01-21 23:02:11
 * @LastEditors: linxiaozhou.com
 * @Description: Description
 */
import fs from "fs-extra";

import { gatewayConfig } from "./gateway.config";
import { systemConfig } from "./system.config";

export const run = async () => {
  const gatewayConfigJson = JSON.stringify(gatewayConfig, null, 2);
  const systemConfigJson = JSON.stringify(systemConfig, null, 2);
  await fs.writeFile("./dist/config/gateway.config.json", gatewayConfigJson, "utf8");
  await fs.writeFile("./dist/config/system.config.json", systemConfigJson, "utf8");
};
