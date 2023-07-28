const config = require("../config/auth.config");
const db = require("../models");
const Region = db.region;


exports.findRegion = (req, res) => { 
    console.log(req.body)
    Region.find(
      (err, region) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send(region);
      }
    )
}
exports.createRegion = (req, res) => {
    const region = new Region({
        nomRegion:req.body.nomRegion,
        description:req.body.description,
      });
  
      region.save((err, rg) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send({ message: "TypeReparation was created successfully", rg });
      });
}
exports.findTypeRegionById = (req, res) => { 
    console.log(req.params.nomRegion)
    Region.find({_id:req.params._id},
      (err, rg) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.send(rg);
      }
    )
}