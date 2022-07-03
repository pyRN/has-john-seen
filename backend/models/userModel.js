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
        _id: mongoose.Types.ObjectId,
        sUsername: String,
      },
    ],
    aRecommendations: [
      {
        _id: mongoose.Types.ObjectId,
        sUsername: String,
        _nMovieId: mongoose.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
