//@desc Get movies
//@route GET /api/movies
//@access Private
const getMovies = (request, response) => {
  response.status(200).json({ message: "Get Movies" });
};

//@desc Set movies
//@route POST /api/movies
//@access Private
const postMovies = (request, response) => {
  response.status(200).json({ message: "Post Movies" });
};

//@desc Update movies
//@route UPDATE /api/movies/:id
//@access Private
const updateMovies = (request, response) => {
  response.status(200).json({ message: `Updated movie: ${request.params.id}` });
};

//@desc Remove movies
//@route DELETE /api/movies/:id
//@access Private
const deleteMovies = (request, response) => {
  response.status(200).json({ message: `Deleted movie: ${request.params.id}` });
};

module.exports = {
  getMovies,
  postMovies,
  updateMovies,
  deleteMovies,
};
