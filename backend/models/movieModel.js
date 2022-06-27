const mongoose = require("mongoose");
const movieSchema = mongoose.Schema(
  {
    _id: Number,
    aRatingsAndComments: [
      {
        _id: mongoose.Types.ObjectId,
        nRating: Number,
        sComment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
