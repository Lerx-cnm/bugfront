export const getSingleBug = (id) => {
    return (dispatch) => {
       return fetch(`http://localhost:3001/bugs/${id}`)
        .then((resp) => resp.json())
        .then((result) => {
        dispatch({ type: "FETCH_SINGLE_BUG", payload: result})
        });
    };
};