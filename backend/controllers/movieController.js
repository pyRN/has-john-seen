const asyncHandler = require("express-async-handler");

//@desc Get movies
//@route GET /api/movies
//@access Private
const getMovies = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "Get Movies" });
});

//@desc Set movies
//@route POST /api/movies
//@access Private
const postMovies = asyncHandler(async (request, response) => {
  console.log(request.body);
  if (!request.body.text) {
    response.status(400);
    throw new Error("Please add movie title");
  }

  response.status(200).json({ message: "Post Movies" });
});

//@desc Update movies
//@route UPDATE /api/movies/:id
//@access Private
const updateMovies = asyncHandler(async (request, response) => {
  response.status(200).json({ message: `Updated movie: ${request.params.id}` });
});

//@desc Remove movies
//@route DELETE /api/movies/:id
//@access Private
const deleteMovies = asyncHandler(async (request, response) => {
  response.status(200).json({ message: `Deleted movie: ${request.params.id}` });
});

module.exports = {
  getMovies,
  postMovies,
  updateMovies,
  deleteMovies,
};
