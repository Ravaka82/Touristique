const { authJwt } = require("../middlewares");
const controller = require("../controllers/region.controller");

module.exports = function(app) {
    app.get("/api/region/findRegion", controller.findRegion);
    app.post("/api/region/createRegion", controller.createRegion);
    app.get("/api/region/findTypeRegionById/:_id",controller.findTypeRegionById);
};