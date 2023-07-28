
const config = require("../config/auth.config");
const db = require("../models");
const User = db.utilisateur;

exports.clientBoard = (req, res) => {
  res.status(200).send("Contenu client");
};
exports.findUser = (req, res) => { 
  console.log(req.body)
  User.find(
    (err, utilisateur) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(utilisateur);
    }
  )
}
exports.findTypeRegionById = (req, res) => { 
  User.find({_id:req.params._id},
    (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.send(user);
    }
  )
}