const MovieContainer = () => {
  return (
    <div className="flex-column movie-card">
      <div className="flex-row">
        <h1>Movie Title Goes Here</h1>
      </div>
      <div className="flex-row">
        <div className="flex-column center">
          <img src="https://via.placeholder.com/200" alt="Placeholder" />
        </div>
        <div className="flex-column center">
          <h2>Synopsis</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            ipsa facilis quis dignissimos nulla beatae. Optio asperiores
            possimus perspiciatis? Numquam illum magnam voluptatem dicta
            obcaecati enim dolore veniam eius cum?
          </p>
          <h3>Average Rating</h3>
        </div>
      </div>
      <div className="flex-row">
        <table>
          <tr>
            <th>User</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
          <tr>
            <td>Jacob Mayeux</td>
            <td>5</td>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              illo, eligendi laboriosam tenetur harum dolor, quam molestiae
              expedita quas eum fugiat maiores ipsum iste minus nihil laudantium
              repellendus doloremque ullam?
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MovieContainer;
