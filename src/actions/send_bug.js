export const sendBug = (data) =>{
    return(dispatch) => {
        fetch('http://localhost:3001/bugs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(account => {
            dispatch({type: 'ADD_BUG', payload: account})})
    }
}