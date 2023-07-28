const mongoose = require("mongoose");
const Region = mongoose.model(
    "Region",
    new mongoose.Schema({
      nomRegion  :       {type:String,default:""},
      description:       {type:String,default:""},
    })
); 
module.exports = Region;