import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { useRouter } from '../../hooks'
import columns from '../../json/columns.json'
import { getCollaborators } from '../../requests/'
import { Table } from '../../components'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Home = ({ handleId, updatedData }) => {
  const [ collaborators, setCollaborators ] = useState(null)
  const router = useRouter()

  const onClickNewCollaborators = (e) => {
    return router.push('/new-collaborator')
  }

  useEffect(() => {
    if(collaborators === null) {
      getCollaborators()
      .then(value => setCollaborators(value))
    }
  })

  return (
    <Fragment>
      <div className="home">
          <div className="searchContainer">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            <Button variant="primary" size="sm" onClick={onClickNewCollaborators}> Novo Colaborador </Button>
          </div>
          <div className="content">
            <Table
                columns = { Object.keys(columns) }
                data = {collaborators}
                onClick = {handleId}
            />
          </div>
      </div>

    </Fragment>
  )
}

export default withRouter(Home)
