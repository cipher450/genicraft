const gpt = require("../../config/config").openai;
const models = require("../../config/models");
const prompts = require("../../config/prompts");
const helper = require("../../helpers");
module.exports = {
  new: async (req, res) => {
    try {
    } catch (error) {}

    const { subject, tone, language, writing, sponsor, sponsorText, emojis } =
      req.body;

    if (!helper.isEmpty(req.body) || (sponsor == false && sponsorText == "")) {
       
      let userPrompt = {
        role: "user",
        content: `subject : ${subject}, tone : ${tone}, language:${language},writingStyle:${writing},sponsor:${sponsor} ${
          sponsorText && "sponsorText:" + sponsorText
        } ,emojis:${emojis}`,
      };
     let ToSend = await models.gpt3(
        prompts.writing.socialMedia.posts,
        userPrompt,
        true
      );
      return res.status(200).json(JSON.parse(ToSend));
    } else {
      return res.status(400).json({ error: helper.isEmpty(req.body) });
    }
  },
};
