const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

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
  const movie = await Movie.create({
    _id: request.body._id,
    sTitle: request.body.title,
    // aComments: [...aComments],
    // aRatings: []
  });
  response.status(200).json(movie);
});

//@desc Update movies
//@route UPDATE /api/movies/:id
//@access Private
const updateMovies = asyncHandler(async (request, response) => {
  const movie = await Movie.findById(request.params.id);
  if (!movie) {
    response.status(400);
    throw new Error("Movie not found");
  }
  const updatedMovie = await Movie.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  );
  response.status(200).json(updatedMovie);
});

//@desc Remove movies
//@route DELETE /api/movies/:id
//@access Private
const deleteMovies = asyncHandler(async (request, response) => {
  const movie = await Movie.findById(request.params.id);
  if (!movie) {
    response.status(400);
    throw new Error("Movie not found");
  }
  await Movie.findByIdAndDelete(request.params.id);
  response.status(200).json({ message: `Deleted movie: ${request.params.id}` });
});

module.exports = {
  getMovies,
  postMovies,
  updateMovies,
  deleteMovies,
};
