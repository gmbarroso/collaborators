import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { useRouter } from '../../hooks'
import columns from '../../json/columns.json'
import { getCollaborators } from '../../requests/'
import { useTranslation } from 'react-i18next'
import {
  Table,
  Search,
} from '../../components'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const array = []

const Home = ({ handleId }) => {
  const { t } = useTranslation('common')
  const [ collaborators, setCollaborators ] = useState(array)

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

      return name || position || cpf || email
    })

    if(searchValue === '') {
      getArray()
    } else {
      setCollaborators(searchedObjectValues)
    }
  }
  
  useEffect(() => {
    getArray()
  }, [])

  return (
    <Fragment>
      <div className="home">
          <div className="searchContainer">
            <Search
              search={handleSearch}
              error={collaborators.length === 0}
            />
            <Button
              className="newCollaboratorBtn"
              variant="primary"
              size="sm"
              onClick={onClickNewCollaborators}
              disabled={collaborators.length === 0}
            >
                { t('home.newCollaboratorBtn') }
            </Button>
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
