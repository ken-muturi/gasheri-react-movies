import React, { useState } from "react";
import Modal from "../Modal";
const apiUrL = "http://localhost:8000/api";

const Form = (props) => {
  const { setShowAddMovieForm, setShowError, setShowSuccess, setMovies } =
    props;

  const [movieDetails, setMovieDetails] = useState({
    title: "",
    year: "",
  });
  console.log({ movieDetails });

  const handleFormElement = (input, value) => {
    setMovieDetails({
      ...movieDetails,
      [input]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrL}/movies`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieDetails),
    })
      .then((res) => res.json())
      .then((d) => {
        setShowSuccess("Success deleting Movie");
        // console.log(d);
        setMovies((prevMovies) => {
          return [...prevMovies, d];
        });
        setShowAddMovieForm(false);
      })
      .catch((e) => {
        setShowError("Error deleting movie" + e);
      });
  };

  return (
    <Modal onClose={setShowAddMovieForm}>
      <h2>Movie Information Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="movieName" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            name="movieName"
            defaultValue={movieDetails.name}
            required
            onChange={(e) => {
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
          <label htmlFor="created_by" className="form-label">
          created_by
          </label>
          <input
            type="text"
            className="form-control"
            id="created_by"
            defaultValue={movieDetails.created_by}
            name="created_by"
            required
            onChange={(e) => {
              handleFormElement("created_by", e.target.value);
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
                setShowAddMovieForm(null);
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
