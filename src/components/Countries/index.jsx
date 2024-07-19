import React, { useState, useEffect } from "react";
import AddCountry from "./AddCountry";
import EditCountry from "./EditCountry";
import App from "../../App";

const apiUrL = "http://localhost:8000/api";

const Index = () => {
  const [countries, setCountries] = useState([]);

  const [currentCountry, setCurrentCountry] = useState(null);
  const [showAddCountryForm, setShowAddCountryForm] = useState(false);

  const [success, showSuccess] = useState("");
  const [error, showError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${apiUrL}/countries`).then((res) => res.json());
      setCountries(data);
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`${apiUrL}/countries/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setCountries(countries.filter((d) => d.id !== id));
        showSuccess("Success deleting country");
      })
      .catch((e) => {
        showError("Error deleting country" + e);
      });
  };

  return (
    <App>
      <div className="pagetitle">
        <h1>Blank Page</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">Pages</li>
            <li className="breadcrumb-item active">Blank</li>
          </ol>
        </nav>
      </div>
      <section className="section">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Countries</h5>
            {success && (
              <div
                className="alert alert-success bg-success text-light border-0 alert-dismissible fade show"
                role="alert"
              >
                Success saving Countries
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            {error && (
              <div
                className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show"
                role="alert"
              >
                Error saving country
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">iso2</th>
                  <th scope="col">iso3</th>
                  <th scope="col">code</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{++index}</th>
                      <td>{country.name}</td>
                      <td>{country.iso2}</td>
                      <td>{country.iso3}</td>
                      <td>{country.code}</td>
                      <td>
                        <span
                          className="pointer"
                          onClick={() => {
                            setCurrentCountry(country);
                          }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </span>
                        
                        <span
                          className="pointer"
                          onClick={() => {
                            handleDelete(country.id);
                          }}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>
              <a
                href="#"
                className="btn btn-sm btn-primary"
                onClick={() => {
                  setShowAddCountryForm(true);
                }}
              >
                Add Country
              </a>
            </p>
            {showAddCountryForm && (
              <AddCountry
                setCountries={setCountries}
                setShowError={showError}
                setShowSuccess={showSuccess}
                setShowAddCountryForm={setShowAddCountryForm}
              />
            )}

            {currentCountry && (
              <EditCountry
                setCountries={setCountries}
                setShowError={showError}
                setShowSuccess={showSuccess}
                setCurrentCountry={setCurrentCountry}
                country={currentCountry}
              />
            )}
          </div>
        </div>
      </section>
    </App>
  );
};

export default Index;