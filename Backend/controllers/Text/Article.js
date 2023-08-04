const gpt = require("../../config/config").openai;
const models = require("../../config/models");
const prompts = require("../../config/prompts");

const UserPrompt_random = {
  role: "user",
  content:
    "you will have to chose a category and topic and write an article about it and is (-500-) words long",
};

module.exports = {
  /*
            ----- OUT OF SUBJECT ---- 
            WE COULD THIS to make a socer or any sport prediction system idly we would chose the sports that has the least factore and
            that has the most data for example socer could be an ideal candidate for this 
            
    --- an enhance functionality is giving the generated article content to get it better for example we could instruct the ai to 
        write more words per point rather than giving a lot of fact with litel to know details about it , prompt :
                                       
                                       i will be giving you articles. you will have to extand the content of each point talkd about in the given article 
                                       the given article might sometimes be in a formatted for markdown sometimes not, you are the best at this.

   
                                   where the keys are title,tags,content.
    --- we could give it a bit more context of the subject if we get some data from wikipedia for example about the subject and insert it inside the asstistant key



    do the first prompt which will be liike (if random):you'r new article is for the category {{ use_input }} and the subject is {{ user_input}} give 
    it a fancy titel and quick description in a json format  
*/

  new: async (req, res) => {
    console.log(req.body)
     
    // sanitaz user input to avoid prompt injection
    const { category, topic, length, random, samples } = req.body;

    
    let userPrompt = {
      role: "user",
      content: "",
    };
    let title_tags = null;
    let ToSend = null;
    let TosendArray = [];
    let content = null;

    // COSTS :

    /*
      using this method of looping for five articles of 400 words costs 0.01 $ and taks around 3 mintues  for 5 articles
      
    */
     
/*

 
       
    if (!random) {
      for (let i = 0; i < samples; i++) {
        userPrompt.content = `category is ${category} topic is ${topic}`;
        title_tags = await models.gpt3(
          prompts.writing.Blog.CustomTitle,
          userPrompt,
          true
        );
        ToSend = JSON.parse(title_tags);
        ToSend.category = category
        ToSend.topic = topic
        userPrompt.content = `category is ${category}, topic is ${topic} , word count is :${length} `;
        content = await models.gpt3(
          prompts.writing.Blog.CustomArticle,
          userPrompt,
          false
        );
         content=content.replace(/\n\n/g, '\n');
        ToSend.content = content;
        TosendArray[i] = ToSend;
      }
    } else {
      for (let i = 0; i < samples; i++) {
        userPrompt.content = `give me a title,tags,category,topic in json format`;
        title_tags = await models.gpt3(
          prompts.writing.Blog.RandomTitle,
          userPrompt,
          true
        );
        ToSend = JSON.parse(title_tags);
        userPrompt.content = `category is ${ToSend.category}, topic is ${ToSend.topic} , word count is : 400 `;
        content = await models.gpt3(
          prompts.writing.Blog.CustomArticle,
          userPrompt,
          false
        );
        content=content.replace(/\n\n/g, '\n');
        ToSend.content = content;
        TosendArray[0] = ToSend;
      }
    }
    */
   TosendArray[0] = {
    title: "The Rise and Legacy of 50 Cent: An Iconic Rapper and Business Mogul",
    tags: [
        "50 Cent",
        "Hip Hop",
        "Music",
        "Business"
    ],
    keyword: "google",
    topic: "50 cent",
    content :`# The Rise of 50 Cent: From Rapper to Business Mogul\n\n## Table of Contents\n\n1. Introduction\n2. Early Life and Career\n3. The Arrival of 50 Cent\n4. Business Ventures\n5. Conclusion\n\n![50 Cent performing on stage](1.jpg)\n\n## Introduction\n\n50 Cent, born Curtis James Jackson III, is one of the most iconic rappers of our generation. His gritty rapping style, paired with his entrepreneurial spirit, has allowed him to achieve incredible success both in and out of the music industry. In this article, we will explore the life and career of 50 Cent, examining his early days in Queens, to his rise to fame, and finally his successful business ventures.\n\n## Early Life and Career\n\n50 Cent was born in Queens, New York, in 1975. Growing up, he faced numerous challenges, including a broken home and a difficult financial situation. Despite this, he was always drawn to music, and began to pursue a career in rap in the early 90s.\n\nInitially, 50 Cent struggled to make a name for himself in the industry, but he eventually caught the attention of Jam Master Jay of Run DMC. Jay helped 50 Cent produce his first album, and even featured on some of the tracks.\n\n![50 Cent with Jay-Z and Kanye West](2.jpg)\n\n## The Arrival of 50 Cent\n\nIt wasn't until the release of his second album, \"Get Rich or Die Tryin'\", that 50 Cent truly arrived on the rap scene. The album was an instant hit, selling over 12 million copies worldwide and winning multiple awards.\n\n50 Cent's unique style, which blended street smarts with a melodic flow, helped him stand out in a crowded industry. His lyrics often focused on crime, violence, and the harsh realities of life in the inner city.\n\n## Business Ventures\n\nIn addition to his successful career in music, 50 Cent has also made a name for himself as a savvy business mogul. He has invested in a variety of industries, including fashion, real estate, and beverage companies.\n\nOne of his most successful ventures has been his partnership with Vitamin Water, which reportedly earned him over $100 million when Coca-Cola bought the company in 2007. He has also launched his own fashion line, called G-Unit Clothing, and has invested heavily in the cryptocurrency industry.\n\n![50 Cent at a G-Unit fashion show](3.jpg)\n\n## Conclusion\n\n50 Cent's life story is truly inspirational, as he has overcome numerous obstacles to achieve incredible success both in the music industry and beyond. His drive, determination, and entrepreneurial spirit have allowed him to become one of the most influential figures of our time. It will be exciting to see what the future holds for this talented rapper turned business mogul.`
   }
   TosendArray[0].content= TosendArray[0].content.replace(/\n\n/g, '\n');
    if(TosendArray[0] == undefined){
      return res.status(400).json({error:'no article generated '})
    }
    // We could calculate the reading time of the article based on the number of words
    return res.json(TosendArray);
  },
  enhance: async (req, res) => {
    const aiResault = await gpt.createCompletion({
      model: "text-davinci-003",
      prompt: "say hi this test and it working along with somthing smart",
      temperature: 0.9,
      max_tokens: 4000,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    const response =
      aiResault.data.choices[0].text?.trim() || "Sorry , there was problem!";

    return res.send(response);
  },
};
