import React from "react";

const Movies = (props) => {
  const { id, movie, setCurrentMovie, handleDelete } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td>{movie.created_by}</td>
      <td>{movie.created_at}</td>
      <td>
        <span
          className="pointer"
          onClick={() => {
            setCurrentMovie(movie);
          }}
        >
          <i className="bi bi-pencil-square"></i> Edit
        </span>
        |
        <a href="#" className="pointer">
          <i className="bi bi-trash-fill"></i> Profile
        </a>
        |
        <span
          className="pointer"
          onClick={() => {
            handleDelete(movie.id);
          }}
        >
          <i className="bi bi-trash-fill"></i> Delete
        </span>
      </td>
    </tr>
  );
};

export default Movies;
