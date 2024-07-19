import React from "react";

const Movie = (props) => {
  const { movie, setSearch } = props;
  return (
    <div className="col col-md-3">
      <div className="p-2 greenish bordered">
        <h2>{movie.title}</h2>
        <p
          className="pointer"
          onClick={() => {
            setSearch({ year: movie.year.toString() });
          }}
        >
          Year: {movie.year}
        </p>
        <p>Rating: {movie.rating}</p>
        <p
          className="pointer"
          onClick={() => {
            setSearch({ author: movie.author });
          }}
        >
          Author: {movie.author}
        </p>
        <p
          className="pointer"
          onClick={() => {
            setSearch({ country: movie.country });
          }}
        >
          Country: {movie.country}
        </p>
      </div>
    </div>
  );
};

export default Movie;
