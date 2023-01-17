const express = require("express");
const actorController = require("../controllers/actorController.js");
const router = express.Router();

router.post("/add", actorController.addActor);
router.get("/", actorController.getActors);
module.exports = router;
