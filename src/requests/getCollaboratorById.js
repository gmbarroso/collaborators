const getCollaboratorById = async id => {
    const result = await fetch(`http://localhost:3001/collaborators/${id}`, {
        mode: 'cors',
        method: 'GET',
    })
    return result.json()
}

export default getCollaboratorById