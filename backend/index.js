const express = require("express");
const cors = require("cors");
const app = express();
const { backendPort, db, cloudinary } = require("./conf.js");
const multer = require("multer");
const bodyParser = require("body-parser");
const upload = multer({ dest: 'tmp/' });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

// USERS || GET & POST
app.get("/api/users", (req, res) => {
  db.query(
    "SELECT id, firstname, lastname, team_id, pseudo, sexe, address, avatar, email, age, country, city, creation_date, twitch, bio, mixer, youtube, LOL_pseudo, Fortnite_pseudo, CSGO_pseudo, OW_pseudo, HOTS_pseudo, SMITE_pseudo, APEX_pseudo, STARCRAFT2_pseudo, Hearstone_pseudo, KROSMAGA_pseudo, SSBU_pseudo, Tekken_pseudo, SF5_pseudo, ROCKETLEAGUE_pseudo, TFT_pseudo, PUBG_pseudo, R6S_pseudo, Paladins_pseudo from user",
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des données");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// FIL-ACTU || GET & POST
app.get("/api/posts/:limit", (req, res) => {
  db.query(
    "SELECT id, circle_id, user_id, user_id_team, game_id, message, date, image_url from post ORDER BY id DESC LIMIT 4 OFFSET ?  ",
    [Number(req.params.limit)],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/gamelist/", (req, res) => {
  db.query(
    "SELECT * from game",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.post("/api/postimg", upload.single('file'), (req, res) => {

  const formData = req.file;



  cloudinary.v2.uploader.upload(formData.path,
    function (err, result) {
      if (err) {
        res.status(500).send("Erreur lors de la sauvegarde de l'image");
        console.log("1" + err)
      } else {

        res.send(result);
      }
    });
});

app.post("/api/posts", (req, res) => {
  const formData = req.body;
  db.query("INSERT INTO post SET ?", formData, (err, results) => {
    if (err) {
      console.log("2" + err)
      res.status(500).send("Erreur lors de la sauvegarde du message");
    } else {
      res.sendStatus(201);
    }
  });
})




app.listen(backendPort, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
});