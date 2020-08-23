const deleteCollaborator = async (id) => {
    const result = await fetch(`http://localhost:3001/collaborators/${id}`, {
        mode: 'cors',
        method: 'DELETE',
    })
    return result.json()
}

export default deleteCollaborator