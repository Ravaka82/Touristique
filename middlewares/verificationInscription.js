const db = require("../models");
const User = db.utilisateur;

checkDuplicateNomOuEmail = (req, res, next) => {
  // Nom
  User.findOne({
    nom: req.body.nom
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Ce nom existe déjà" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Cet email existe déjà" });
        return;
      }

      next();
    });
  });
};


const verificationInscription = {
  checkDuplicateNomOuEmail,
};

module.exports = verificationInscription;