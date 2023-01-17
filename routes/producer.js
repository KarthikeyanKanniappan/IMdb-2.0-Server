const express = require("express");
const producerController = require("../controllers/producerController.js");
const router = express.Router();

router.post("/add", producerController.addProducer);
router.get("/", producerController.getProducer);

module.exports = router;
