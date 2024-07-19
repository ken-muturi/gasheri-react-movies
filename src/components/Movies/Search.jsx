import React, { useState } from "react";

const Search = (props) => {
  const { search, setSearch } = props;

  let searchKey = "";
  let searchValue = "";
  if (search) {
    searchKey = Object.keys(search)[0];
    searchValue = Object.values(search)[0];
  }
  const str = searchKey ? `${searchKey}: ${searchValue}` : "";
  return (
    <div className="form-floating mb-3">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          value={`${str}`}
          placeholder="Search"
          onChange={(e) => setSearch({ all: e.target.value })}
        />
        <label htmlFor="floatingInput">Search</label>
      </div>
    </div>
  );
};

export default Search;
