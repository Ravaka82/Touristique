const config = require("../config/auth.config");
const db = require("../models");
const Attractions = db.attractions;
const Region = db.region;

exports.createAttraction = (req, res) => {
    Region.findOne({ _id: req.body.region }, (err, region) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
  
      if (!region) {
        return res.status(404).send({ message: "Region not found" });
      }
  
      // Create a new attraction object
      const newAttraction = new Attractions({
        nomAttraction: req.body.nomAttraction,
        typeAttraction: req.body.typeAttraction,
        region: Region._id, // Assign the region ID to the attraction
        photo: req.body.photo,
      });
  
      // Save the attraction to the database
      newAttraction.save((err) => {
        if (err) {
          return res.status(500).send({ message: err });
        }
  
        console.log("New Attraction:", newAttraction);
        res.send({ message: "Attraction created successfully" });
      });
    });
};

exports.findAttractionsByRegion = (req, res) => {
  console.log(req.params);
  Attractions.find({ region: req.params.region })
    .populate("region")
    .exec((err, attractions) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      console.log(req.params);
      res.send(attractions);
    });
};
