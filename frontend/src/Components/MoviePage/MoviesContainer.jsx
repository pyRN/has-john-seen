import { useNavigate } from "react-router-dom";

//Dev Only
import oMultipleMovies from "./multipleMoviesExample.json";
import oSingleMovie from "./singleMovieExample.json";

const MoviesContainer = () => {
  // const oMultipleMovies = oMultipleMovies;
  const fnUseNavigate = useNavigate();
  return (
    <div className="flex-row center flex-wrap">
      {oMultipleMovies.results.map((oMovie) => {
        return (
          <div
            className="movie-link-card"
            key={oMovie.id}
            onClick={(oMovie) => fnUseNavigate("/movie", { state: oMovie })}
          >
            <img src="https://via.placeholder.com/200" alt="Placeholder" />
            <h2>{oMovie.title}</h2>
            <p>{oMovie.vote_average}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesContainer;
