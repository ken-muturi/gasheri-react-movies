import React from "react";

const Genre = (props) => {
  const { id, genre, setCurrentGenre, handleDelete } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{genre.title}</td>
      <td>{genre.description}</td>
      <td>
        <span
          className="pointer"
          onClick={() => {
            setCurrentGenre(genre);
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
            handleDelete(genre.id);
          }}
        >
          <i className="bi bi-trash-fill"></i> Delete
        </span>
      </td>
    </tr>
  );
};

export default Genre;
