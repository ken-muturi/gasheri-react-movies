import React, { useState } from "react";
import Modal from "../Modal";
const apiUrL = "http://localhost:8000/api";

const Form = (props) => {
  const { setShowAddGenreForm, setShowError, setShowSuccess, setGenres} =
    props;

  const [genreDetails, setGenreDetails] = useState({
    title: "",
    description: "",
  });
  console.log({ genreDetails });

  const handleFormElement = (input, value) => {
    setGenreDetails({
      ...genreDetails,
      [input]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrL}/genre`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(genreDetails),
    })
      .then((res) => res.json())
      .then((d) => {
        setShowSuccess("Success deleting genre");
        // console.log(d);
        setStudents((prevGenres) => {
          return [...prevgenres, d];
        });
        setShowAddGenreForm(false);
      })
      .catch((e) => {
        setShowError("Error deleting genre" + e);
      });
  };

  return (
    
    <Modal onClose={setShowAddGenreForm}>
      <h2>Genre Information Form</h2>
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
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            defaultValue={genreDetails.description}
            name="description"
            required
            onChange={(e) => {
              handleFormElement("description", e.target.value);
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
                setShowAddGenreForm(null);
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
