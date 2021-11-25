export const getBugs = () => {
    return (dispatch) => {
       return fetch(`http://localhost:3001/bugs`)
        .then((resp) => resp.json())
        .then((result) => {
        dispatch({ type: "FETCH_BUGS", payload: result})
        });
    };
};