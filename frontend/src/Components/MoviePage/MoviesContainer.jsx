import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//Components
import Navbar from "./Navbar.jsx";

//Dev Only
import oMultipleMovies from "./multipleMoviesExample.json";
import oSingleMovie from "./singleMovieExample.json";

const MoviesContainer = () => {
  const fnUseNavigate = useNavigate();
  const [aSearchedMovie, fnSetSearchMovie] = useState(null);
  return (
    <div className="flex-column center">
      <Navbar fnSetSearchMovie={fnSetSearchMovie} />
      <div className="flex-row center flex-wrap">
        {oMultipleMovies.results.map((oMovie) => {
          return (
            <div
              className="flex-column center movie-link-card"
              key={oMovie.id}
              onClick={() => {
                fnUseNavigate("/movie", { state: oMovie });
              }}
            >
              <img
                src="https://via.placeholder.com/200x300"
                alt="Placeholder"
                className="movie-link-card-img"
              />
              <h2 className="movie-link-card-title">{oMovie.title}</h2>
              <p className="movie-link-card-text">
                Released: {oMovie.release_date.split("-")[0]}
              </p>
              <p className="movie-link-card-text">
                Average Rating: {oMovie.vote_average}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesContainer;
