const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.utilisateur;

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({ message: "Je ne vois pas de token!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Non autoriser!" });
    }
    req.userId = decoded.id;
    next();
  });
};


isClient = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user.isClient) {
      next(); // L'utilisateur est un client, passez à la prochaine étape de la chaîne de middleware.
    } else {
      res.status(403).send({ message: "Require Client" });
    }
  });
};


const authJwt = {
  verifyToken,
  isClient
};
module.exports = authJwt;