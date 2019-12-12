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

app.listen(backendPort, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${backendPort}`);
});
