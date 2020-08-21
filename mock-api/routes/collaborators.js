const express = require('express')
const router = express.Router()

const collaborators = require('../../mock-api/json/collaborators.json')
const validateCollaboratorsObj = require('../validations/collaboratorValidator')

const getCollaboratorById = (req, res) => {
  const collaborator = collaborators.find(c => {
    return (
      c.id === parseInt(req.params.id)
    )
   })
  
   if (!collaborator) (
     res.status(404).send('This collaborator is not register in our database.')
   )

   return collaborator
}

router.get('/', (req, res) => {
  res.send(collaborators)
})

router.get('/:id', (req, res) => {
  const collaborator = getCollaboratorById(req, res)
  res.send(collaborator)
})

router.post('/', (req, res) => {
  const result = validateCollaboratorsObj(req, res)

  if (result.error) {
    const resultTransformed = result.error.details.map((err) => {
      return ({
        parameter: err.path[0],
        message: err.message
      })
    })

    return res.status(400).send({
      error: true,
      validationErrors: resultTransformed
    })
  }
  
  const collaborator = {
    id: collaborators.length + 1,
    name: req.body.name,
    position: req.body.position,
    cpf: req.body.cpf,
    email: req.body.email,
  }

  console.log(collaborator)

  collaborators.push(collaborator)
  res.send(collaborator)
})

router.put('/:id', (req, res) => {
  const collaborator = getCollaboratorById(req, res)

  // const { error } = validateCollaboratorsObj(req, res)
  // if (error) {
  //   console.log(error)
  //   return res.status(400).send(error.details[0].message)
  // }

  collaborator.name = req.body.name
  collaborator.position = req.body.position
  collaborator.cpf = req.body.cpf
  collaborator.email = req.body.email

  console.log(collaborator)
  res.send(collaborator)
})

router.delete('/:id', (req, res) => {
  const collaborator = getCollaboratorById(req, res)

  const index = collaborators.indexOf(collaborator)
  collaborators.splice(index, 1)

  res.send(collaborator)
})

module.exports = router