const express = require("express");
const cors = require("cors");
const app = express();
const { backendPort, db } = require("./conf.js");
const cloudinary = require("cloudinary")

const bodyParser = require("body-parser");

cloudinary.config({
  cloud_name: 'lanur',
  api_key: '275875865423731',
  api_secret: 'P1mQ0l-H9hoMHPv5QqKi4xcwmOc'
});
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
app.get("/api/posts", (req, res, next) => {
  db.query(
    "SELECT id, circle_id, user_id, user_id_team, game_id, message, date from post",
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des données");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.post("/api/posts", (req, res) => {
  const formData = req.body;
  db.query("INSERT INTO post SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde du message");
    } else {
      res.sendStatus(201);
    }
  });
});

// app.post("/imgupload", (req, res) => {
//   const formData = req.body;
//   console.log(formData)
//   cloudinary.v2.uploader.upload(req.body.imagePreviewUrl.data, { public_id: "sample_id", file: req.body.imagePreviewUrl.data, },
//     // { public_id: "sample_id", file: formData, },
//     function (err, result) {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Erreur lors de la sauvegarde de l'image");
//       } else {
//         res.send(result);
//         console.log(result);
//       }
//     });
// });

app.post("/imgupload", (req, res) => {
  const formData = req.body;
  console.log(formData)
  cloudinary.v2.uploader.upload(formData.imagePreviewUrl,
    // { public_id: "sample_id", file: formData, },
    function (err, result) {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde de l'image");
      } else {
        res.send(result);
        console.log(result);
      }
    });
});




app.listen(backendPort, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${backendPort}`);
});
