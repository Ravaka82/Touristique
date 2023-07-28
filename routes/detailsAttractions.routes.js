const { authJwt } = require("../middlewares");
const controller = require("../controllers/detailsAttractions.controller");

module.exports = function(app) {
    app.post("/api/detailsAttractions/createDetailsAttraction", controller.createDetailsAttraction);
    app.get("/api/detailsAttractions/findDetailsAttractionsByAttraction/:attractions", controller.findDetailsAttractionsByAttraction);
};