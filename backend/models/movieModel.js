const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
  _id: Number,
  sTitle: String,
  // aRatings: [],
});

module.exports = mongoose.model("Movie", movieSchema);
