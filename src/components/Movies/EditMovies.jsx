import React, { useState } from "react";
import Modal from "../Modal";
const apiUrL = "http://localhost:8000/api";
const Form = (props) => {
  const {
    movie,
    setCurrentMovie,
    setShowError,
    setShowSuccess,
    setMovies,
  } = props;

  const [movieDetails, setMovieDetails] = useState(movie);
  console.log({ movieDetails });

  const handleFormElement = (input, value) => {
    setMovieDetails({
      ...movieDetails,
      [input]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrL}/movies/${movieDetails.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieDetails),
    })
      .then((res) => res.json())
      .then((d) => {
        setShowSuccess("Success deleting student");
        setMovies((prevMovies) => {
          return prevMovies.map((m) => {
            // if(s.id === studentDetails.id) {
            //   return studentDetails;
            // }
            // return s;
            return m.id === movieDetails.id ? movieDetails :m;
          });
        });
        setCurrentMovie(null);
      })
      .catch((e) => {
        setShowError("Error deleting movie" + e);
      });
  };

  return (
    <Modal onClose={setCurrentMovie}>
      <h2>Movie Information Form</h2>
      <form>

        <div className="mb-3">
          <label htmlFor="movietitle" className="form-label">
            Movie title
          </label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            name="movieName"
            defaultValue={movieDetails.name}
            required
            onChange={(e) => {
              // console.log({ event: e.target.value });
              setMovieDetails({
                ...movieDetails,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            year
          </label>
          <input
            type="text"
            className="form-control"
            id="year"
            defaultValue={movieDetails.year}
            name="year"
            required
            onChange={(e) => {
              handleFormElement("year", e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="created_at" className="form-label">
            created_at
          </label>
          <input
            type="created_at"
            defaultValue={movieDetails.created_at}
            className="form-control"
            id="created_at"
            name="created_at"
            required
            onChange={(e) => {
              handleFormElement("created_at", e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="created_byr" className="form-label">
           Created by
          </label>
          <input
            type="text"
            className="form-control"
            id="created_byr"
            defaultValue={movieDetails.created_byr}
            name="created_byr"
            required
            onChange={(e) => {
              handleFormElement("created_byr", e.target.value);
            }}
          />
        </div>
        
        <div className="mt-5 mb-2">
          <hr />
          <div className="pt-2">
            <input
              type="submit"
              // onClick={(e) => { handleFormSubmit(e) }}
              onClick={handleFormSubmit}
              value="Save"
              className="btn btn-primary"
            />{" "}
            &nbsp; &nbsp;
            <input
              type="submit"
              onClick={() => {
                setCurrentMovie(null);
              }}
              value="Cancel"
              className="btn btn-danger"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
