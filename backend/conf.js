require("dotenv").config();
const mysql = require("mysql");
const backendPort = process.env.BACKEND_PORT || "4200";
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "example.org", // adresse du serveur
  user: process.env.DB_USER || "bob", // le nom d'utilisateur
  password: process.env.DB_PASSWORD || "secret", // le mot de passe
  database: process.env.DB_DATABASE || "my_db" // le nom de la base de données
});

module.exports = {
  backendPort,
  db
};
