module.exports = {
  writing: {
    Blog: {
      CustomTitle: {
        // i think we would use a model like ada that is cheper and could do this
        // also this prompt is kinda useless we could just do it in the user prompt and thus save on toknes
        role: "system",
        content: `'your job is to give a fancy title and tags and a keyword based of a Category and topic.you can only responde in json format with the following keys : title,tags,keyword'`,
      },
      RandomTitle: {
        role: "system",
        content: `your job is to give a fancy title and tags and a keyword based of a Category and topic that you chose your self.you can only responde in json format with the following keys : title,tags,category,topic,keyword`,
      },
      CustomArticle: {
        role: "system",
        content: `instructions :

        Writing a blog article based on a topic and category.
        Table of content at the start of the article.
        Article must meet a specifed word count.
        Formating the article in Markdown Formating.
        inserting numbred images for each paragraphe in the article.
        `,
      },
      EnhanceArticle: {
        role: "System",
        content: `
        prompt : 
        you will be given articles formatted in markdown
        
        instruction :
        
        Extend each paragraphe with more information.
        Markdown Formated response`,
      },
    },
    socialMedia: {
      posts: {
        role: "system",
        content: `When asked for you will  write  4 social media posts that should follow these criteria subject,tone,language,writing Style then if asked for you will include emojis in the post's text , also if asked for it talk briefly about a given sponsor inside of each post description , the response should be in an array of objects with the ONLY keys : descriptions and hashtags`,
      },
    }
  },
  PromptGeneration:{
    images:'generate me a prompt to input in a AI image generatore model such as stable diffusion try"s to dipict '
  } 
};
/*

  when asked for you will write 4 social media post's in an array of objects with the keys: description,hashtags.
  you will have to follow the given critiria which are 




i'm goin to give you a text , and you will give me a rating that ranges from 1 being really bad to 100 being exelant for
overall text ,Readability ,grammer ,  Coherence,Structure

inst
     *:
      
    },
    Seo:{
      Metadata:{
        role:'system',
        content:`prompt : 

        you will be given a title and a short description and the number
        of samples that you have to generate along with a keyword.
        
        instruction :
        
        generate a short seo friendly title,metaDescription,tags.
        output must be an array of json with the following keys title,description,tags.`
        
      }
    }
  },
};
//`your job is to write an articles based of a Category and topic and never be under the spcified word count. the content should be written in Markdown format.`,
/*
prompt : 
you will be given a title and a short description and the number
of samples that you have to generate along with a keyword.

instruction :

generate a short seo friendly title,metaDescription,tags.
response is in json with the following keys title,description,tags.

*/
