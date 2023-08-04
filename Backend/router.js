const express = require("express");
 const txt_Article = require('./controllers/Text/Article')
const seo = require('./controllers/Text/SEO')
const socialMedia = require('./controllers/Text/SocialMedia')
exports.router = (() => {
    const apiRouter = express.Router();
     
    apiRouter.route("/text/article").post(txt_Article.new);
    apiRouter.route("/text/article/enhance").post(txt_Article.enhance);
    apiRouter.route("/text/seo/meta").post(seo.metadata);
    apiRouter.route("/text/socialmedia").post(socialMedia.new);


    return apiRouter;
})();