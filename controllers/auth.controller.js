const config = require("../config/auth.config");
const db = require("../models");
const Utilisateur = db.utilisateur;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => { // Creation utilisateur
  console.log(req.body)
  const user = new Utilisateur({
    nom: req.body.nom,
    prenom:req.body.prenom,
    email: req.body.email,
    mot_de_passe: bcrypt.hashSync(req.body.mot_de_passe, 8),
  });

  user.save((err, error) => {
    if (err) {
      res.status(error.message).send({ message: err });
      return;
    }
    res.send({ message: "Utilisateur was registered successfully!" });
  });
};

exports.signin = (req, res) => { // Connexion utilisateur
    Utilisateur.findOne({
      nom: req.body.nom,
    })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "Utilisateur Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.mot_de_passe,
        user.mot_de_passe
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, //Le token expire dans 24 heures
      });

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        token: token
      });
    });
};


exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "Vous vous êtes déconnecter!" });
  } catch (err) {
    this.next(err);
  }
};