const Joi = require('joi')
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const morgan = require('morgan')
const collaborators = require('../mock-api/json/collaborators.json')

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})
app.use(morgan('tiny'))

const validateCollaboratorsObj = (req, res) => {
  const schema =  Joi.object({
    id: Joi.string(),
    name: Joi.string().min(3).required(),
    position: Joi.string().required(),
    cpf: Joi.string().required(),
    email: Joi.string().required()
  })

  return schema.validate(req.body)
}

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

app.get('/', (req, res) => {
  res.send('Working Good...')
})

app.get('/collaborators', (req, res) => {
  res.send(collaborators)
})

app.get('/collaborators/:id', (req, res) => {
  const collaborator = getCollaboratorById(req, res)
  res.send(collaborator)
})

app.post('/collaborators', (req, res) => {
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

app.put('/collaborators/:id', (req, res) => {
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

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}...`))