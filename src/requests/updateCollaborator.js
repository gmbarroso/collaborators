const updateCollaborator = async (id, data) => {
    const result = await fetch(`http://localhost:3001/collaborators/${id}`, {
        mode: 'cors',
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return result.json()
}

export default updateCollaborator