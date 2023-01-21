const express = require("express");
const movieController = require("../controllers/movieController.js");
const router = express.Router();

router.post("/add", movieController.addMovie);
router.get("/", movieController.getMovie);
router.get("/particular/:id", movieController.getMovieByUser);
router.put("/edit/:id", movieController.updateMovie);
router.delete("/delete/:id", movieController.deleteMovie);
module.exports = router;
