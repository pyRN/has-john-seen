const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    sEmail: {
      type: String,
      required: [true, "Email Required"],
      unique: true,
    },
    sUsername: {
      type: String,
      required: [true, "User Name Required"],
      unique: true,
    },
    sPassword: {
      type: String,
      required: [true, "Password Required"],
    },
    aFriends: [
      {
        sUsername: String,
      },
    ],
    aRecommendations: [
      {
        nMovieId: String,
        sUsername: String,
        sComment: String,
      },
    ],
    aMoviesWatched: [
      {
        nMovieId: String,
        nRating: String,
        sComment: String,
      },
    ],
    aWatchList: [
      {
        nMovieId: String,
        nRating: String,
        sComment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
