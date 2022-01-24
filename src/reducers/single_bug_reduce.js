export default function SingleBugReduce(state = {bug: "failure"}, action) {
	switch (action.type) {
		case 'FETCH_SINGLE_BUG':
			return {
				bug: action.payload
			}
			
		default:
			return state;
    }
}