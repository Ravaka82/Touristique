const { authJwt } = require("../middlewares");
const controller = require("../controllers/attractions.controller");

module.exports = function(app) {
    app.post("/api/attractions/createAttraction", controller.createAttraction);
    app.get("/api/attractions/findAttractionsByRegion/:region", controller.findAttractionsByRegion);

};