import React, { useState, useEffect, useCallback, Fragment } from 'react';
import {
  withRouter,
} from 'react-router-dom'
import columns from '../../json/columns.json'
import { Table } from '../../components'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Home = props => {

  return (
    <Fragment>
      <div className="home">
          <div className="searchContainer">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            <Button variant="primary" size="sm"> Criar </Button>
          </div>
          <Table
            columns = { Object.keys(columns) }
          />
          
      </div>

    </Fragment>
  )
}

export default withRouter(Home)
