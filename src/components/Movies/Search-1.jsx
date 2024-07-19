import React, { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const { setMovies, showError } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/api/movies/search?q=${search}`)
      .then(async (res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          const data = await res.json();
          throw new Error(data.error);
        }
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((e) => {
        showError(e.message);
      });
  };

  return (
    <div class="form-floating mb-3">
      <form method="get" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            name="q"
            placeholder="Search 1"
            defaultValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label for="floatingInput">Search 1</label>
        </div>
      </form>
    </div>
  );
};

export default Search;
