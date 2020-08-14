import React from 'react';

import {
  withRouter,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <h1 className="marginBtm">Collaboratos App</h1>
    </div>
  )
}

export default withRouter(Header);