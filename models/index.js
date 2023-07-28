const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.utilisateur = require("./utilisateur.model");
db.region = require("./region.model");
db.attractions = require("./attractions.model");
db.detailsAttractions = require("./detailsAttractions.model");

module.exports = db;