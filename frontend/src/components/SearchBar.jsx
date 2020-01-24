import React, { useState } from "react";
import "./style/SearchBar.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { backend } from "../conf.js";
import { useDispatch, useSelector } from "react-redux";

function SearchBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`${backend}/api/search/users/?pseudo=${search}`)
      .then(function(response) {
        dispatch({ type: "SEARCH", value: response.data });
        console.log(search);
        console.log(response.data);
      })
      .then(() => {
        console.log("history");
        history.push("/search");
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
