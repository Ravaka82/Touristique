
const config = require("../config/auth.config");
const db = require("../models");
const Attractions = db.attractions;
const DetailsAttractions = db.detailsAttractions;


exports.createDetailsAttraction = (req, res) => {
  // Assurez-vous que vous avez l'ID de l'attraction dans req.body.attraction
  // Vérifiez si l'attraction existe
  Attractions.findOne({ _id: req.body.attraction }, (err, attraction) => {
    if (err) {
      return res.status(500).send({ message: err });
    }

    if (!attraction) {
      return res.status(404).send({ message: "Attraction not found" });
    }

    // Créez un nouvel objet DetailsAttractions
    const newDetailsAttraction = new DetailsAttractions({
      attractions: attraction._id, // Assignez l'ID de l'attraction
      description: req.body.description,
      photo: req.body.photo,
      video: req.body.video,
    });

    // Enregistrez les détails de l'attraction dans la base de données
    newDetailsAttraction.save((err) => {
      if (err) {
        return res.status(500).send({ message: err });
      }

      console.log("New Details Attraction:", newDetailsAttraction);
      res.send({ message: "Details Attraction created successfully" });
    });
  });
};


exports.findDetailsAttractionsByAttraction = (req, res) => {
  console.log(req.params);
  DetailsAttractions.find({ attractions: req.params.attractions })
    .populate("attractions")
    .exec((err, detailsAttractions) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      console.log(req.params);
      res.send(detailsAttractions);
    });
};
