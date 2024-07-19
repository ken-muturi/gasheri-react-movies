import React, { useState, useEffect } from "react";
import AddGenre from "./AddGenre";
import EditGenre from "./EditGenre";
import App from "../../App";

const apiUrL = "http://localhost:8000/api";

const Index = () => {
  const [genres, setGenres] = useState([]);

  const [currentGenre, setCurrentGenre] = useState(null);
  const [showAddGenreForm, setShowAddGenreForm] = useState(false);

  const [success, showSuccess] = useState("");
  const [error, showError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${apiUrL}/genres`).then((res) => res.json());
      setGenres(data);
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`${apiUrL}/genres/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setGenre(genres.filter((d) => d.id !== id));
        showSuccess("Success deleting genre");
      })
      .catch((e) => {
        showError("Error deleting genre" + e);
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
            <h5 className="card-title">Genres</h5>
            {success && (
              <div
                className="alert alert-success bg-success text-light border-0 alert-dismissible fade show"
                role="alert"
              >
                Success saving genres
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
                Error saving genre
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
                  <th scope="col">title</th>
                  <th scope="col">description</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {genres.map((genre, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{++index}</th>
                      <td>{genre.name}</td>
                      <td>{genre.description}</td>
                      <td>
                        <span
                          className="pointer"
                          onClick={() => {
                            setCurrentGenre(genre);
                          }}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </span>
                        
                        <span
                          className="pointer"
                          onClick={() => {
                            handleDelete(genre.id);
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
                  setShowAddGenreForm(true);
                }}
              >
                Add Genre
              </a>
            </p>
            {showAddGenreForm && (
              <AddGenre
                setGenres={setGenres}
                setShowError={showError}
                setShowSuccess={showSuccess}
                setShowAddGenreForm={setShowAddGenreForm}
              />
            )}

            {currentGenre && (
              <EditGenre
                setGenres={setGenres}
                setShowError={showError}
                setShowSuccess={showSuccess}
                setCurrentGenre={setCurrentGenre}
                genre={currentGenre}
              />
            )}
          </div>
        </div>
      </section>
    </App>
  );
};

export default Index;