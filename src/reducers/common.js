import { SET_ACTIVE_FILTER, SEARCH_CONTACT } from '../constants';

const initialState = {
	activeFilter: 'General'
};

export default function activateFilter(state = initialState, action) {
	switch (action.type) {
		case SET_ACTIVE_FILTER:
			return {
				...state,
				activeFilter: action.activeFilter
			};
		case SEARCH_CONTACT:
			return {
				...state,
				search: action.searchValue
			};
		default:
			return state;
	}
}