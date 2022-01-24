export default function sentBugReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_BUG':
            return{...state,
                    bugs: action.payload
                }
        default:
            return state;
    }
}