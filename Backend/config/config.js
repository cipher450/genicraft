const assert = require("assert");
const dotenv = require("dotenv");

dotenv.config();

const { PORT } = process.env;

assert(PORT, "PORT configuration is required.");

module.exports = {
    port: PORT,
     
  };
  