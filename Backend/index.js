 
const express = require("express");
const cors = require("cors");
const configData = require("./config/config.js");
const router = require('./router').router;




   const app = express();

// Autoriser toutes les origines à se connecter au serveur (TO BE REMOVED IN PRODUCTION)
app.use(
  cors({
    origin: "*",
  })
);
// Parser le corps des requêtes en JSON
app.use(express.json());
app.get('/',  (req, res) =>{
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('Yeah it is working ! ');
});

// Router pour les requêtes de l'API
app.use('/',router);
 
app.listen(configData.port, () => {
  console.log(`Server is running on port :${configData.port}`);
});
