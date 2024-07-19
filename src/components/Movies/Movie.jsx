import React from "react";

const Movie = (props) => {
  const { movie } = props;
  return (
    <div className="col col-md-3">
      <div className="p-2 greenish bordered">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <p>Author: {movie.author}</p>
        <p>Country: {movie.country}</p>
      </div>
    </div>
  );
};

export default Movie;
