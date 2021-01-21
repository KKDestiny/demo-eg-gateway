const path = require('path');
const gateway = require('express-gateway');
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
