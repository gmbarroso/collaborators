import React, { useState } from "react";

import './style.css'

const Search = ({search}) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
    search(e.target.value)
  }

  // const resetInputField = () => {
  //   setSearchValue("")
  // }

  const callSearchFunction = (e) => {
    e.preventDefault()
    search(searchValue)
    // resetInputField()
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} className="searchBtn" type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;