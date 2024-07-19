import React, { useState } from "react";
import Modal from "../Modal";
const apiUrL = "http://localhost:8000/api";

const Form = (props) => {
  const { setShowAddCountryForm, setShowError, setShowSuccess, setCountries } =
    props;

  const [countryDetails, setCountryDetails] = useState({
    name: "",
    iso2: "",
    iso3: "",
    code: "",
  });
  console.log({ countryDetails });

  const handleFormElement = (input, value) => {
    setCountryDetails({
      ...countryDetails,
      [input]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrL}/countries`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(countryDetails),
    })
      .then((res) => res.json())
      .then((d) => {
        setShowSuccess("Success deleting Country");
        setCountries((prevCountries) => {
          return [...prevCountries, d];
        });
        setShowAddCountryForm(false);
      })
      .catch((e) => {
        setShowError("Error deleting country" + e);
      });
  };

  return (
    
    <Modal onClose={setShowAddCountryForm}>
      <h2>Country Information Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="countryName" className="form-label">
          Country Name
          </label>
          <input
            type="text"
            className="form-control"
            id="CountryName"
            name="countryName"
            defaultValue={countryDetails.name}
            required
            onChange={(e) => {
              setCountryDetails({
                ...countryDetails,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="iso2" className="form-label">
            iso2
          </label>
          <input
            type="text"
            className="form-control"
            id="iso2"
            defaultValue={countryDetails.iso2}
            name="iso2"
            required
            onChange={(e) => {
              handleFormElement("iso2", e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="iso3" className="form-label">
            iso3
          </label>
          <input
            type="name"
            defaultValue={countryDetails.iso3}
            className="form-control"
            id="name"
            name="iso3"
            required
            onChange={(e) => {
              handleFormElement("iso3", e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            code
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            defaultValue={countryDetails.code}
            name="code"
            required
            onChange={(e) => {
              handleFormElement("code", e.target.value);
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
                setShowAddCountryForm(null);
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
