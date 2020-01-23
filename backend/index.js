const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const passport = require("passport");
const {
  CONFIG: { backendPort },
  db,
  cloudinary
} = require("./conf");
const bodyParser = require("body-parser");
const upload = multer({ dest: "tmp/" });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(passport.initialize());

// Authentification
app.use("/api/auth", require("./auth"));

// USERS || GET & POST & PATCH
app.get("/api/users", (req, res) => {
  db.query(
    "SELECT id, firstname, lastname, team_id, pseudo, gender, address, avatar, email, age, country, city, creation_date, twitch, bio, mixer, youtube, LOL_pseudo, Fortnite_pseudo, CSGO_pseudo, OW_pseudo, HOTS_pseudo, SMITE_pseudo, APEX_pseudo, STARCRAFT2_pseudo, Hearstone_pseudo, KROSMAGA_pseudo, SSBU_pseudo, Tekken_pseudo, SF5_pseudo, ROCKETLEAGUE_pseudo, TFT_pseudo, PUBG_pseudo, R6S_pseudo, Paladins_pseudo from user",
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des données");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.put(
  "/api/user/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const formData = req.body;
    db.query(
      "UPDATE user SET ? WHERE id = ?",
      [formData, req.user.id],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde du message");
        } else {
          res.sendStatus(201);
        }
      }
    );
  }
);

// USER || GET for the userPage
app.get(
  "/api/profile/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    db.query(
      "SELECT user.avatar, user.id, user.pseudo, user.age, user.country, user.city, user.bio, user.team_id, user.role, user.mixer, user.youtube, user.twitch, user.lastname, user.firstname, user.discord_pseudo FROM user WHERE user.id=?",
      [req.params.id],
      (err, results) => {
        if (err) {
          res
            .status(500)
            .send("Erreur lors de la récupération des données de profile");
        } else {
          res.status(200).json(results);
        }
      }
    );
  }
);

app.get("/api/user/posts/:id", (req, res) => {
  db.query(
    "SELECT post.id, user_id, user_id_team, game_id, message, date, image_url from post WHERE post.user_id = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

// FIL-ACTU || GET & POST
app.get("/api/posts/:limit", (req, res) => {
  db.query(
    "SELECT id, circle_id, user_id, user_id_team, game_id, message, date, image_url from post ORDER BY id DESC LIMIT 10 OFFSET ?  ",
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
  db.query("SELECT * from game", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/api/postimg", upload.single("file"), (req, res) => {
  const formData = req.file;
  cloudinary.v2.uploader.upload(formData.path, function(err, result) {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde de l'image");
    } else {
      res.send(result);
    }
  });
});

app.post("/api/posts", (req, res) => {
  const formData = req.body;
  db.query("INSERT INTO post SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde du message");
    } else {
      res.sendStatus(201);
    }
  });
});

app.get("/api/comments/post/:id", (req, res) => {
  db.query(
    "SELECT comment.id, comment.user_id, comment.content, comment.post_id, user.pseudo, user.avatar from comment JOIN user on comment.user_id=user.id where comment.post_id = ? ",
    [Number(req.params.id)],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.post("/api/comments", (req, res) => {
  const formData = req.body;
  db.query("INSERT INTO comment SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde du post");
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(backendPort, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
});
