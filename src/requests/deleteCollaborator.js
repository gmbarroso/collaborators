const deleteCollaborator = async (id) => {
    const result = await fetch(`http://localhost:3001/collaborators/${id}`, {
        mode: 'cors',
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    return result.json()
}

export default deleteCollaborator