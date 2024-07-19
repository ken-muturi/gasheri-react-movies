import React from "react";

const Country = (props) => {
  const { id, country, setCurrentCountry, handleDelete } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
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
          <i className="bi bi-pencil-square"></i> Edit
        </span>
        |
        <a href="#" className="pointer">
          <i className="bi bi-trash-fill"></i> Profile
        </a>
        |
        <span
          className="pointer"
          onClick={() => {
            handleDelete(country.id);
          }}
        >
          <i className="bi bi-trash-fill"></i> Delete
        </span>
      </td>
    </tr>
  );
};

export default Country;
