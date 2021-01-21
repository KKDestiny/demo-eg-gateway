/*
 * @Date: 2021-01-21 15:19:54
 * @LastEditors: linxiaozhou.com
 * @Description: Description
 */
const path = require('path');
const gateway = require('express-gateway');
const dotenv = require("dotenv");

import { run } from "./config/sources/compile";

dotenv.config({ path: ".env" });

const start = async () => {
  await run();

  gateway()
    .load(path.join(__dirname, 'config'))
    .run();
}

start();
