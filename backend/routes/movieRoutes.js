const express = require("express");
const router = express.Router();
const {
  getMovies,
  postMovies,
  updateMovies,
} = require("../controllers/movieController");

const { protect } = require("../middleware/authMiddleware");

//CRUD routes
router.post("/", protect, postMovies);
router.get("/", getMovies);
router.put("/:id", protect, updateMovies);
// router.delete("/:id", protect, deleteMovies);

module.exports = router;
