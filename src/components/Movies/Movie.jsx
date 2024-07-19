import React, { useState } from "react";
import Modal from "../Modal";

const Movie = (props) => {
  const { movie, setSearch } = props;
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  return (
    <>
      <div className="col col-md-3">
        <div className="d-flex">
          <div className="movie-img">
            <img
              width="100px"
              src={movie.image}
              alt={movie.title}
              title={movie.title}
            />
          </div>
          <div className="p-2 greenish bordered">
            <h2
              onClick={() => {
                setShowMovieDetails(true);
              }}
            >
              {movie.title}
            </h2>
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
      </div>
      {showMovieDetails && (
        <Modal onClose={setShowMovieDetails}>
          <div>
            <div>
              <img src={movie.image} alt={movie.title} title={movie.title} />{" "}
            </div>
            {movie.description}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Movie;
