import React, { useState, useEffect, useCallback, Fragment } from 'react';

// import {
//   useGeolocation,
//   useDarkTheme,
//   useLocalStorage
// } from '../../hooks'

import {
  withRouter,
} from 'react-router-dom'

import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Home = props => {
//   const [ isChecked, setChecked ] = useLocalStorage('darkMode', false)
  
//   useDarkTheme(isChecked)

//   const handleClick = () => setChecked(!isChecked)


//   useEffect(() => {
//     // getCities()
//     if (hourly.comment === null) {
//       getData()
//       renderLoader()
//     }
//   }, [hourly, latitude, longitude, i18n, getData, renderLoader])

  return (
    <Fragment>
        <div className="home">
          <div className="container">
            <div className="searchContainer">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <Button variant="primary" size="sm"> Criar </Button>
          </div>
        </div>

    </Fragment>
  )
}

export default withRouter(Home)
