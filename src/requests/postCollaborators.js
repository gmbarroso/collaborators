const postCollaborators = async (data) => {
    const result = await fetch('http://localhost:3001/collaborators', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return result.json()
}

export default postCollaborators