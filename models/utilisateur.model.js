const mongoose = require("mongoose");

const Utilisateur = mongoose.model(
  "Utilisateur",
  new mongoose.Schema({
    nom:          {type:String,default:""},
    prenom:       {type:String,default:""},
    email:        {type:String,default:""},
    mot_de_passe: {type:String,default:""},
  })
);

module.exports = Utilisateur;