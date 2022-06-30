//TODO: Pull in movie in formation from backend.

import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MovieComponent = () => {
  const { state } = useLocation();

  return (
    <div className="flex-column center">
      <div className="flex-column center movie-card">
        <div className="flex-row">
          <h1 className="movie-card-title">{state.title}</h1>
        </div>
        <div className="flex-row center flex-wrap">
          <div className="flex-column center">
            <img src="https://via.placeholder.com/200" alt="Placeholder" />
          </div>
          <div className="flex-column center">
            <p className="movie-link-card-text">{state.overview}</p>
            <h3 className="movie-link-card-text">
              Average Rating: {state.vote_average}
            </h3>
          </div>
        </div>
        <div className="flex-row center">
          <table className="center">
            <thead>
              <tr>
                <th className="table-column-1">User</th>
                <th className="table-column-2">Rating</th>
                <th className="table-column-3">Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-column-1">Jacob Mayeux</td>
                <td className="table-column-2">5</td>
                <td className="table-column-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat illo, eligendi laboriosam tenetur harum dolor, quam
                  molestiae expedita quas eum fugiat maiores ipsum iste minus
                  nihil laudantium repellendus doloremque ullam?
                </td>
              </tr>
              <tr>
                <td className="table-column-1">Jacob Mayeux</td>
                <td className="table-column-2">5</td>
                <td className="table-column-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat illo, eligendi laboriosam tenetur harum dolor, quam
                  molestiae expedita quas eum fugiat maiores ipsum iste minus
                  nihil laudantium repellendus doloremque ullam?
                </td>
              </tr>
              <tr>
                <td className="table-column-1">Jacob Mayeux</td>
                <td className="table-column-2">5</td>
                <td className="table-column-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat illo, eligendi laboriosam tenetur harum dolor, quam
                  molestiae expedita quas eum fugiat maiores ipsum iste minus
                  nihil laudantium repellendus doloremque ullam?
                </td>
              </tr>
              <tr>
                <td className="table-column-1">Jacob Mayeux</td>
                <td className="table-column-2">5</td>
                <td className="table-column-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat illo, eligendi laboriosam tenetur harum dolor, quam
                  molestiae expedita quas eum fugiat maiores ipsum iste minus
                  nihil laudantium repellendus doloremque ullam?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
