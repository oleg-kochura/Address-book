import { SET_ACTIVE_FILTER } from '../constants';

const initialState = {
	activeFilter: 'General',
};

export default function activateFilter(state = initialState, action) {
	switch (action.type) {
		case SET_ACTIVE_FILTER:
			return {
				...state,
				activeFilter: action.activeFilter
			};
		default:
			return state;
	}
}