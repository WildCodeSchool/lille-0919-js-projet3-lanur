import React, { useState } from "react";
import "./style/SearchBar.scss";
import axios from "axios";
import { backend } from "../conf.js";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`${backend}/api/search/users/?pseudo=${search}`)
      .then(function(response) {
        console.log(search);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const change = e => {
    console.log(search);
    setSearch(e.target.value);
  };
  return (
    <form className="formSearchBar" onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="text"
        placeholder="Saisissez un pseudo"
        value={search}
        onChange={e => change(e)}
      />
    </form>
  );
}

export default SearchBar;
