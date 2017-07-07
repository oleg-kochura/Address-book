import { SET_ACTIVE_FILTER, ADD_GROUP } from '../constants';

// const initialState = [ 'family', 'work', 'friends'];
const initialState = {
	activeFilter: "General",
	filters: [ 'General', 'Family', 'Work', 'Friends']
};

export default function groups(state = initialState, action) {
	switch (action.type) {
		case SET_ACTIVE_FILTER:
			return {
				...state,
				activeFilter: action.activeFilter
			};
		case ADD_GROUP:
			return {
				...state,
				filters: [...state.filters, action.group]
			};
		default:
			return state;
	}
}