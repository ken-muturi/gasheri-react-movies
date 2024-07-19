import React, { useState, useEffect } from "react";
import AddMovies from "./AddMovies";
import EditMovies from "./EditMovies";
import Movie from "./Movie";
import Search from "./Search";
import App from "../../App";
const apiUrL = "http://localhost:8000/api";

const Index = () => {
  const [defaultMovies, setDefaultMovies] = useState([]);

  const [movies, setMovies] = useState(defaultMovies);

  const [currentMovies, setCurrentMovies] = useState(null);
  const [showAddMoviesForm, setShowAddMoviesForm] = useState(false);

  const [success, showSuccess] = useState("");
  const [error, showError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${apiUrL}/movies`).then((res) => res.json());
      setDefaultMovies(data);
      setMovies(data);
    };

    fetchData();
  }, []);

  console.log({ defaultMovies });

  useEffect(() => {
    let MoviesList = defaultMovies;
    if (search) {
      MoviesList = MoviesList.filter((s) => {
        const str = search.toLowerCase();
        return (
          s.name.toLowerCase().includes(str) ||
          s.entrynumber.toLowerCase().includes(str) ||
          s.email.toLowerCase().includes(str) ||
          s.contactnumber.toLowerCase().includes(str) ||
          s.homecity.toLowerCase().includes(str)
        );
      });
    }
    setMovies(MoviesList);
  }, [search, defaultMovies]);

  const handleDelete = (id) => {
    fetch(`${apiUrL}/Movies/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setMovies(movies.filter((d) => d.id !== id));
        showSuccess("Success deleting Movies");
      })
      .catch((e) => {
        showError("Error deleting Movies" + e);
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
            <h5 className="card-title">Movies</h5>
            {success && (
              <div
                className="alert alert-success bg-success text-light border-0 alert-dismissible fade show"
                role="alert"
              >
                Success saving Movies
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
                {error}
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            <Search2 setSearch={setSearch} />

            <Search1 setMovies={setMovies} showError={showError} />
            <Search setMovies={setMovies} showError={showError} />

            <table className="table table-hover  table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Entry Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Home City</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((Movie, index) => {
                  return (
                    <Movie
                      key={index}
                      id={++index}
                      Movies={Movie}
                      setCurrentMovies={setCurrentMovies}
                      handleDelete={handleDelete}
                    />
                  );
                })}
              </tbody>
            </table>
            <p>
              <a
                href="#"
                className="btn btn-sm btn-primary"
                onClick={() => {
                  setShowAddMoviesForm(true);
                }}
              >
                Add Movies
              </a>
            </p>
            {showAddMoviesForm && (
              <AddMovies
                setMovies={setMovies}
                setShowError={showError}
                setShowSuccess={showSuccess}
                setShowAddMoviesForm={setShowAddMoviesForm}
              />
            )}

            {currentMovies && (
              <EditMovies
                setMovies={setMovies}
                setShowError={showError}
                setShowSuccess={showSuccess}
                setCurrentMovies={setCurrentMovies}
                Movies={currentMovies}
              />
            )}
          </div>
        </div>
      </section>
    </App>
  );
};

export default Index;
