const Joi = require('joi')

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

module.exports = validateCollaboratorsObj