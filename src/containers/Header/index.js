import React from 'react';
import { Flags } from '../../components'

import {
  withRouter,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Header = props => {
  return (
    <div className="header">
      <h1 className="marginBtm">Collaboratos App</h1>
      <Flags language = { props.lang } />
    </div>
  )
}

export default withRouter(Header);