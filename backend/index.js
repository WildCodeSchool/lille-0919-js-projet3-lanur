const express = require("express");
const app = express();
const { backendPort, db } = require("./conf.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.send("Bienvenue sur Express");
});

app.get("/api/users", (req, res) => {
  db.query(
    "SELECT id, firstname, lastname, team_id, pseudo, sexe, address, avatar, email, age, country, city, twitch, bio, mixer, youtube, LOL_pseudo, Fortnite_pseudo, CSGO_pseudo, OW_pseudo, HOTS_pseudo, SMITE_pseudo, APEX_pseudo, STARCRAFT2_pseudo, Hearstone_pseudo, KROSMAGA_pseudo, SSBU_pseudo, Tekken_pseudo, SF5_pseudo, ROCKETLEAGUE_pseudo, TFT_pseudo, PUBG_pseudo, R6S_pseudo, Paladins_pseudo from user",
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des données");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/api/userslight", (req, res) => {
  db.query(
    "SELECT id, firstname, lastname, pseudo from user",
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des données");
      } else {
        res.json(results);
      }
    }
  );
});

app.post("/api/newuser", (req, res) => {
  const formData = req.body;
  db.query("INSERT INTO user SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un utilisateur");
    } else {
      res.sendStatus(200);
    }
  });
});

app.get("/api/postslist", (req, res) => {
  db.query("SELECT * from post", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des données");
    } else {
      res.json(results);
    }
  });
});

app.listen(backendPort, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${backendPort}`);
});
