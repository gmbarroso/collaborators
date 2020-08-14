import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'

import {
  Header,
  Home
} from '../../containers'

import {
  Route,
  // Switch,
  HashRouter,
  withRouter,
} from 'react-router-dom'

const Root = () => {
  
  // Using HashRouter is not the final solution
  return (
    <Fragment>
      <Header />
      {/* <Home lang = { handleLanguage } /> */}
      {/* <Switch>
        <Route exact path="/" component={() => <Home lang = { handleLanguage } />} />
        <Route path="/home" component={() => <Home />} />
      </Switch> */}
      <HashRouter>
        <Route exact path="/" component={() => <Home />} />
      </HashRouter>
    </Fragment>
  )
}

// Root.propTypes = {
//   history: PropTypes.shape({
//     listen: PropTypes.func,
//   }).isRequired,
// }

export default withRouter(Root)
