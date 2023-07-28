const mongoose = require("mongoose");
const DetailsAttractions  = mongoose.model(
    "DetailsAttractions ",
    new mongoose.Schema({
        attractions:    {type: mongoose.Schema.Types.ObjectId, ref: 'Attractions' },
        description:    {type:String,default:""},
        photo:          {type:String,default:""},
        video:          {type:String,default:""},

    })
  ); 
module.exports = DetailsAttractions;