import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import App from "../../App";
import { chunkArray } from "../../utils/util";
import Search from "./Search";
const apiUrL = "http://localhost:8000/api";

const Movies = () => {
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(`${apiUrL}/movies`)
        .then((res) => res.json())
        .catch((e) => []);

      setDefaultMovies(data);
      setMovies(data);
    };
    getMovies();
  }, []);

  useEffect(() => {
    let moviesList = defaultMovies;
    if (search) {
      const searchKey = Object.keys(search)[0];
      const searchValue = Object.values(search)[0];
      const str = searchValue.toLowerCase();
      moviesList = moviesList.filter((s) => {
        if (searchKey === "all") {
          return (
            s.title.toLowerCase().includes(str) ||
            s.author.toLowerCase().includes(str) ||
            s.year.toString().includes(str) ||
            s.country.toLowerCase().includes(str) ||
            s.rating.toLowerCase().includes(str)
          );
        } else {
          return s[searchKey].toString().toLowerCase() === str;
        }
      });
    }
    setMovies(moviesList);
  }, [search, defaultMovies, setMovies]);

  console.log({ movies });
  const movieChunks = chunkArray(movies, 4);
  return (
    <App>
      <Search search={search} setSearch={setSearch} />
      {movieChunks.map((chunk, index) => {
        return (
          <div key={index} className="row mb-3">
            {chunk.map((movie) => (
              <Movie key={movie.id} setSearch={setSearch} movie={movie} />
            ))}
          </div>
        );
      })}
    </App>
  );
};

export default Movies;
