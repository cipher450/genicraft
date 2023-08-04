const openai = require("./config").openai;

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
      return error;
    }
  },
};
