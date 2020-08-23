import {
  deleteCollaborator,
  getCollaboratorById,
  getCollaborators,
  postCollaborators,
  updateCollaborator,
} from '../src/requests'

describe('test the requests from the application', () => {
  let collaborators = []
  const newCollaborator = {
    name: "John Smith",
    position: "Developer",
    cpf: '123.456.789-10',
    email: 'john.smith@email.com'
  }

  it('if the get method is working', async () => {
    await getCollaborators()
      .then(result => {
        collaborators = result

        const collaboratorsLength = collaborators.length
        const resultLength = result.length

        expect(Array.isArray(collaborators)).toBe(true)
        expect(collaborators).toBe(result)
        expect(collaboratorsLength).toEqual(resultLength)
      })
  })
  it('if it gets a collaborator by its Id', async () => {
    const collaboratorId = 1
    await getCollaboratorById(collaboratorId)
      .then(result => {
        const resultKeysArray = Object.keys(result)
        expect(Object(result, result)).toBe(result)
        expect(result.id).toEqual(collaboratorId)
        expect(resultKeysArray).toContain('name')
        expect(resultKeysArray).toContain('position')
        expect(resultKeysArray).toContain('cpf')
        expect(resultKeysArray).toContain('email')
      })
  })
  it('if it is possible to add a new collaborator', async () => {
    const collaboratorValues = Object.values(newCollaborator)

    expect(newCollaborator).toHaveProperty('name')
    expect(newCollaborator).toHaveProperty('position')
    expect(newCollaborator).toHaveProperty('cpf')
    expect(newCollaborator).toHaveProperty('email')

    collaboratorValues.forEach(value => expect(typeof value).toBe('string'))

    await Promise.all([
      getCollaborators(),
      postCollaborators(newCollaborator),
      getCollaborators()
    ]).then(results => {
      const firstLength = results[0].length
      const secondLength = results[2].length
      
      expect(results[0].length).toEqual(firstLength)
      expect(results[1]).toMatchObject(newCollaborator)
      expect(Object.keys(results[1])).toContain('id')
      expect(results[0]).not.toEqual(results[2])
      expect(secondLength).not.toEqual(firstLength)
      expect(results[2].length).toEqual(secondLength)
      expect(results[2][30].name).toBe(newCollaborator.name)
      expect(results[2][30].position).toBe(newCollaborator.position)
      expect(results[2][30].cpf).toBe(newCollaborator.cpf)
      expect(results[2][30].email).toBe(newCollaborator.email)
    })
  })
  it('if it is possible to update a collaborator by the id', async () => {
    await Promise.all([
      getCollaborators(),
      updateCollaborator(1, newCollaborator),
      getCollaborators()
    ]).then(results => {
      const firstValues = Object.values(results[0][0])
      const secondValues = Object.values(results[2][0])
      
      expect(results[0]).not.toBe(results[2])
      expect(Object.values(firstValues)).not.toBe(secondValues)
    })
  })
  // it('if it is possible to delete a collaborator by the id', async () => {
  //   await Promise.all([
  //     getCollaborators(),
  //     deleteCollaborator(31),
  //     getCollaborators()
  //   ]).then(results => {
  //     expect(results[0][1]).not.toEqual(results[2][1])
  //   })
  // })
})