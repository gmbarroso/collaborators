const getCollaborators = async () => {
    const result = await fetch('http://localhost:3001/collaborators', {
        mode: 'cors',
        method: 'GET',
    })
    return result.json()
}

export default getCollaborators