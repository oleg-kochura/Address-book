import { ADD_GROUP } from '../constants';

const initialState = [ 'General', 'Family', 'Work', 'Friends'];

export default function groups(state = initialState, action) {
	switch (action.type) {
		case ADD_GROUP:
			return 	[action.group, ...state];
		default:
			return state;
	}
}