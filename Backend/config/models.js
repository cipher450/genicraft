const openai = require("./config").openai;
const key = require("./config").StableDiff;
const hfKey = require("./config").huggingface;
const { HfInference } = require("@huggingface/inference");
const { randomNameGenerator, saveBlobToFile } = require("../helpers");
let errorObject = {
  status: "",
  error: "",
};
async function gptGenerate(systel, user) {
  return await gpt.createChatCompletion({
    model: "",
  });
}

module.exports = {
  gpt3: async (system, user, trim) => {
    try {
      let aiResault = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [system, user],
      });

      if (trim) {
        return (
          aiResault.data.choices[0].message.content.trim() ||
          "Sorry , there was problem!"
        );
      } else {
        return (
          aiResault.data.choices[0].message.content ||
          "Sorry , there was problem!"
        );
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        return res
          .status(error.response.status)
          .json({ error: error.response.data });
      } else {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
      }
    }
  },
  davinci: async (prompt,trim) => {
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 0,
        max_tokens: 100,
      });
      return trim ? result.data.choices[0].text.trim() : result.data.choices[0].text;
    } catch (error) {
      if (error.response) {
        errorObject.status = error.response.status;
        errorObject.error = error.response.data;

        return errorObject;
      } else {
        errorObject.status = 500;
        errorObject.error = error.message;
        console.log(error.message);
        return errorObject;
      }
    }
  },

  StableDiffusion: async (prompt, samples, width, height, seed) => {
    /*
 let images;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    if (samples > 4 || samples == 0) {
      return { error: "max samples is 4" };
    }

    var raw = JSON.stringify({
      key: key,
      prompt: prompt,
      negative_prompt:
        "(child:1.5), ((((underage)))), ((((child)))), (((kid))), (((preteen))), (teen:1.5) ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, bad anatomy, watermark, signature, cut off, low contrast, underexposed, overexposed, bad art, beginner, amateur, distorted face, blurry, draft, grainy",
      width: width ? width : "512",
      height: height ? height : "512",
      samples: samples,
      num_inference_steps: "20",
      seed: null,
      guidance_scale: 7.5,
      safety_checker: "yes",
      multi_lingual: "no",
      panorama: "no",
      self_attention: "no",
      upscale: "no",
      embeddings_model: null,
      webhook: null,
      track_id: null,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://stablediffusionapi.com/api/v3/text2img",
      requestOptions
    );
    const json = await response.json();
    console.log(json);

    var fetchingInfo = JSON.stringify({
      key: key,
      request_id: json.id,
    });
    requestOptions.body = fetchingInfo;
    async function fetchimages() {
      const response = await fetch(
        "https://stablediffusionapi.com/api/v4/dreambooth/fetch",
        requestOptions
      );
      const json = await response.json();
      if (json.status == "success") {
         images = json.output;
      } else {
        images = { error: "somthing went wrong while generating images" };
      }
    }

    setTimeout(json.eta,fetchimages)
   */
    try {
      /*

 for (let index = 0; index < samples; index++) {
        let img = await hf.textToImage({
          inputs: prompt,
          model: "stabilityai/stable-diffusion-2",
          parameters: {
            negative_prompt: "blurry",
          },
        });
        Blobimages.push(img);
      }
      for (let i = 0; i < Blobimages.length; i++) {
        const img = Blobimages[i];
        images.push(`../storage/${randomNameGenerator(10, "jpeg")}`);
        saveBlobToFile(img, images[images.length - 1]);
      }
      */
      console.log("stable ");
      const hf = new HfInference(hfKey);
      let Blobimages = [];
      let images = [];
     
      for (let i = 0; i < samples; i++) {
        images.push(`storage/${randomNameGenerator(10, ".jpeg")}`);
        const returnedBlob = await hf.textToImage({
          inputs: prompt,
          model: "stabilityai/stable-diffusion-2",
          parameters: {
            negative_prompt: "blurry",
          },
        });
        await saveBlobToFile(returnedBlob, images[images.length - 1]);
      }
      console.log(images)
      return images;
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
};
