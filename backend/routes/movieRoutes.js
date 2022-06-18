const express = require("express");
const router = express.Router();
const {
  getMovies,
  postMovies,
  updateMovies,
  deleteMovies,
} = require("../controllers/movieController");

//CRUD routes
router.post("/", postMovies);
router.get("/", getMovies);
router.put("/:id", updateMovies);
router.delete("/:id", deleteMovies);

module.exports = router;
