const express = require("express");
 const txt_Article = require('./controllers/Text/Article')
exports.router = (() => {
    const apiRouter = express.Router();
     
    apiRouter.route("/text/article").get(txt_Article.find);


    return apiRouter;
})();