const gpt = require("../../config/config").openai;
const models = require("../../config/models");
const prompts = require("../../config/prompts");
const {isEmpty,isObj} = require("../../helpers");
module.exports = {
  metadata: async (req, res) => {
    const { title, description, samples,keyword } = req.body;
    if (typeof isEmpty(req.body) == "string") {
      return res.json({ error: "Missing fields" });
    }
    if(samples > 10) {
        return res.json({ error: "Too many samples" });
    }
    let userPrompt = {
      role: "user",
      content: "",
    };
    let ToSend = null;
    userPrompt.content = `title : ${title} , description  : ${description} ,samples: ${samples} , keyword : ${keyword}`;
    try {
      ToSend = await models.gpt3(
        prompts.writing.Seo.Metadata,
        userPrompt,
        false
      );
      ToSend= JSON.parse(ToSend);
      return res.json(ToSend);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
