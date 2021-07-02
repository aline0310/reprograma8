const controllers = require("../controllers/seriesControllers.js");
const express = require("express");
const router = express.Router();

router.get("/", controllers.home);
router.get("/all", controllers.bringMeAll);
router.get("/titulo", controllers.getByTitle);
router.get("/:id", controllers.getById);




module.exports = router



