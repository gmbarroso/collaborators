import React, { Fragment, useState } from 'react'

import {
  Header,
  Home,
  NewCollaborator
} from '../../containers'

import {
  Route,
  // Switch,
  HashRouter,
  withRouter,
} from 'react-router-dom'

const Root = (props) => {
  const collaboratorIdArray = props.location.hash.split('/')
  const [ collaborator, setCollaborator ] = useState(null)
  const [ id, setId ] = useState(null)

  const handleId = (data, id) => {
    setId(id)
    const findedCollaborator = data.find(c => {
      return c.id === id
    })
    setCollaborator(findedCollaborator)
  }
  
  // Using HashRouter is not the final solution
  return (
    <Fragment>
      <Header />
      {/* <Switch> */}
      <HashRouter>
        <Route exact path="/" component={() => <Home handleId={handleId}/>} />
        <Route exact path="/new-collaborator" component={() => <NewCollaborator />} />
        <Route exact path={`/new-collaborator/${collaboratorIdArray[2]}`} component={() => <NewCollaborator collaborator={collaborator}/>} />
      </HashRouter>
      {/* </Switch> */}
    </Fragment>
  )
}

export default withRouter(Root)
