import React, { useState } from "react";
import "./style/SearchBar.scss";
import axios from "axios";

  function SearchBar(props) {
     const [search, setSearch] = useState("");

     const handleSubmit = (e) => {
      e.preventDefault()
      axios.get('/api/user', search)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        }) 
    }
     return (
       <form className="formSearchBar" onSubmit={handleSubmit}>
           <input
             className="searchBar"
             type="text"
             placeholder="Saisissez un pseudo"
             value={search}
             onChange={e => setSearch(e.target.value)}
           />
       </form>
     );
   }

export default SearchBar;
