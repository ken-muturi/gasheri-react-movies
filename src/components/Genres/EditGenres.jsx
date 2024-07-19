import React, { useState } from "react";
import Modal from "../Modal";
const apiUrL = "http://localhost:8000/api";

const Form = (props) => {
  const {
    genre,
    setCurrentGenre,
    setShowError,
    setShowSuccess,
    setgenres,
  } = props;

  const [genreDetails, setGenreDetails] = useState(genre);
  console.log({ genreDetails });

  const handleFormElement = (input, value) => {
    setGenreDetails({
      ...genreDetails,
      [input]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrL}/genre/${genreDetails.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(genreDetails),
    })
      .then((res) => res.json())
      .then((d) => {
        setShowSuccess("Success deleting genre");
        setgenres((prevGenres) => {
          return prevGenres.map((s) => {
            return s.id === genreDetails.id ? genreDetails : s;
          });
        });
        setCurrentGenre(null);
      })
      .catch((e) => {
        setShowError("Error deleting genre" + e);
      });
  };

  return (
    <Modal onClose={setCurrentGenre}>
        <h2>genre Information Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="genretitle" className="form-label">
            Genre title
            </label>
            <input
              type="text"
              className="form-control"
              id="genretitle"
              name="genretitle"
              defaultValue={genreDetails.title}
              required
              onChange={(e) => {
                 setGenreDetails({
                  ...genreDetails,
                  title: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descreption" className="form-label">
              descreption
            </label>
            <input
              type="text"
              className="form-control"
              id="descreption"
              defaultValue={genreDetails.descreption}
              name="descreption"
              required
              onChange={(e) => {
                handleFormElement("descreption", e.target.value);
              }}
            />
          </div>
          <div className="mt-5 mb-2">
            <hr />
            <div className="pt-2">
              <input
                type="submit"
                onClick={handleFormSubmit}
                value="Save"
                className="btn btn-primary"
              />{" "}
              &nbsp; &nbsp;
              <input
                type="submit"
                onClick={() => {
                  setCurrentGenre(null);
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