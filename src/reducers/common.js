import {
	SET_ACTIVE_FILTER,
	SEARCH_CONTACT,
	TOGGLE_MODAL_VIEW
} from '../constants';

const initialState = {
	activeFilter: 'General',
	showModal: false
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
		case TOGGLE_MODAL_VIEW:
			return {
				...state,
				showModal: !state.showModal
			};
		default:
			return state;
	}
}