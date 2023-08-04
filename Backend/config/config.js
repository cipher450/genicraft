const assert = require("assert");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const { PORT ,OpenAI,StableDiffusion } = process.env;

assert(PORT, "PORT configuration is required.");



const Configurations = new Configuration({
  apiKey: OpenAI,
});
const gpt = new OpenAIApi(Configurations);


module.exports = {
    port: PORT,
    openai:gpt
  };
  