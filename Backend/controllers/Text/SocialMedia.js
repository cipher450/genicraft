const gpt = require("../../config/config").openai;
const models = require("../../config/models");
const prompts = require("../../config/prompts");
const helper = require("../../helpers");
const StableDiff = require("../graphique/text2img")
module.exports = {
  new: async (req, res) => {
    try {
    } catch (error) {}

    const { subject, tone, language, writing, sponsor, sponsorText, emojis } =
      req.body;

    if (!helper.isEmpty(req.body) || (sponsor == false && sponsorText == "")) {
     /*  
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
      
      ToSend= JSON.parse(ToSend)
      console.log(ToSend)
      


       if(!images.error){
        for (let i = 0; i < ToSend.length; i++) {
          const element = ToSend[i];
          element.image=images.output[i]
        }
      }
      */
      // generating a prompt for STABLE diffusion
 
      let imgPrompt = await models.davinci(prompts.PromptGeneration.images + subject + " , also the response should be in a json array object with key prompt for each 4 of them")
      
      console.log('image prompt :' ,JSON.parse(imgPrompt))
      /*
      
      let images = await models.StableDiffusion('Generate an image of a old cityscape where Bitcoin is the primary form of currency.',4)
      if(!images.error){
       
      }
      
*/
     // return res.status(200).json(ToSend);
    } else {
      return res.status(400).json({ error: helper.isEmpty(req.body) });
    }
  },
};
