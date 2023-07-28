const mongoose = require("mongoose");
const Attractions  = mongoose.model(
    "Attractions ",
    new mongoose.Schema({
      nomAttraction  :   {type:String,default:""},
      typeAttraction :   {type:String,default:""},
      region:            {type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
      photo:             {type:String,default:""},
    })
  ); 
module.exports = Attractions;