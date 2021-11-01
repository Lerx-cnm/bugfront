export default function BugReduce(state = {}, action) {
	switch (action.type) {
		case 'FETCH_BUGS':
			return {...state,
				bugs: action.payload
			}
			
		default:
			return state;
    }
}