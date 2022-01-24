export default sendLog = (data) =>{
    return(dispatch) =>{
        fetch('http://localhost:3001/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(account => {
            dispatch({type: 'LOGIN', payload: account})
        })
    }
}