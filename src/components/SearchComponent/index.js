import React, { useState } from "react"
import { useTranslation } from 'react-i18next'

import './style.css'

const Search = ({search}) => {
  const { t } = useTranslation('common')
  const [searchValue, setSearchValue] = useState("")
  
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
        <input onClick={callSearchFunction} className="searchBtn" type="submit" value={`${t('search.searchBtn')}`} />
      </form>
    );
}

export default Search;