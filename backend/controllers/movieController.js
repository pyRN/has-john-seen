const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");
const User = require("../models/userModel");

//@desc Get movies
//@route GET /api/movies
//@access Private
const getMovies = asyncHandler(async (request, response) => {
  const movies = await Movie.find();
  response.status(200).json(movies);
});

//@desc Set movies
//@route POST /api/movies
//@access Private
const postMovies = asyncHandler(async (request, response) => {
  if (!request.body._id) {
    response.status(400);
    throw new Error("Please add movie sId");
  }

  const oMovie = await Movie.create({
    _id: request.body._id,
    aRatingsAndComments: [
      {
        _id: request.user._id,
        nRating: request.body.nRating ? request.body.nRating : null,
        sComment: request.body.sComment ? request.body.sComment : null,
      },
    ],
  });
  response.status(200).json(oMovie);
});

//@desc Update movies
//@route UPDATE /api/movies/:id
//@access Private
const updateMovies = asyncHandler(async (request, response) => {
  const oMovie = await Movie.findById(request.params.id);
  if (!oMovie) {
    response.status(400);
    throw new Error("Movie not found");
  }

  const user = await User.findById(request.user.id);
  //Check to see if user exists
  if (!user) {
    response.status(401);
    throw new Error("User not found");
  }

  //Checks for updated info:
  let aTempRatingsAndComments = [...oMovie.aRatingsAndComments];
  let nIndex = aTempRatingsAndComments.findIndex(
    (element) => element._id.toString() === user.id
  );
  //If previous record - update
  if (nIndex !== -1) {
    aTempRatingsAndComments[nIndex] = {
      _id: user.id,
      nRating: request.body.nRating
        ? request.body.nRating
        : aTempRatingsAndComments[nIndex].nRating,
      sComment: request.body.sComment
        ? request.body.sComment
        : aTempRatingsAndComments[nIndex].sComment,
    };
  }
  //else add record
  else {
    aTempRatingsAndComments.push({
      _id: user.id,
      nRating: request.body.nRating ? request.body.nRating : null,
      sComment: request.body.sComment ? request.body.sComment : null,
    });
  }

  const updatedMovie = await Movie.findByIdAndUpdate(
    request.params.id,
    {
      aRatingsAndComments: aTempRatingsAndComments,
    },
    {
      new: true,
    }
  );
  response.status(200).json(`Updated movie information for user`);
});

//@desc Remove movies
//@route DELETE /api/movies/:id
//@access Private
// const deleteMovies = asyncHandler(async (request, response) => {
//   const movie = await Movie.findById(request.params.id);
//   if (!movie) {
//     response.status(400);
//     throw new Error("Movie not found");
//   }
//   await Movie.findByIdAndDelete(request.params.id);
//   response.status(200).json({ message: `Deleted movie: ${request.params.id}` });
// });

module.exports = {
  getMovies,
  postMovies,
  updateMovies,
};
