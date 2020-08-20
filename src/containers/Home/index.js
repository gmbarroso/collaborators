import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import { useRouter } from '../../hooks'
import columns from '../../json/columns.json'
import { getCollaborators } from '../../requests/'
import { Table, Search } from '../../components'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Home = ({ handleId }) => {
  const [ collaborators, setCollaborators ] = useState(null)
  const [ foundValue, setFoundValue ] = useState(false)

  const router = useRouter()

  const getArray = () => {
    getCollaborators()
    .then(value => setCollaborators(value))
  }

  const onClickNewCollaborators = (e) => {
    return router.push('/new-collaborator')
  }

  const handleSearch = searchValue => {
    const searchedObjectValues = collaborators.filter(collaborator => {
      const name = collaborator.name.toLowerCase().includes(searchValue.toLowerCase())
      const position = collaborator.position.toLowerCase().includes(searchValue.toLowerCase())
      const cpf = collaborator.cpf.toLowerCase().includes(searchValue.toLowerCase())
      const email = collaborator.email.toLowerCase().includes(searchValue.toLowerCase())

      if(name || position || cpf || email) {
        setFoundValue(true)
      } else {
        setFoundValue(false)
      }

      return name || position || cpf || email
    })

    if(searchValue === '') {
      getArray()
    } else {
      setCollaborators(searchedObjectValues)
    }
  }

  useEffect(() => {
    if(collaborators === null) {
      getArray()
    }
  })

  return (
    <Fragment>
      <div className="home">
          <div className="searchContainer">
            <Search search={handleSearch} />
            <Button className="newCollaboratorBtn" variant="primary" size="sm" onClick={onClickNewCollaborators}> Novo Colaborador </Button>
          </div>
          <div className="content">
            <Table
                columns = { Object.keys(columns) }
                data = {collaborators}
                onClick = {handleId}
            />
            {/* Tratar tablea vazia */}
          </div>
      </div>

    </Fragment>
  )
}

export default withRouter(Home)
