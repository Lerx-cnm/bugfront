export default function BugReduce(state = { bug: "failure"}, action) {
	switch (action.type) {
		case 'FETCH_BUGS':
			// console.log("testing the reducer")
			// console.log(action)
			// console.log(state)
			return {
				bugs: action.payload
			}
			
		default:
			return state;
    }
}