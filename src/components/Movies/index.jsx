import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import App from "../../App";
import { chunkArray } from "../../utils/util";
const apiUrL = "http://localhost:8000/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(`${apiUrL}/movies`)
        .then((res) => res.json())
        .catch((e) => []);

      setMovies(data);
    };
    getMovies();
  }, []);

  console.log({ movies });
  const movieChunks = chunkArray(movies, 4);
  return (
    <App>
      {movieChunks.map((chunk) => {
        return (
          <div className="row mb-3">
            {chunk.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        );
      })}
    </App>
  );
};

export default Movies;
