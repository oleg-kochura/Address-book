import { data } from '../data';
import { ADD_CONTACT, REMOVE_CONTACT } from '../constants';

const initialState = data;

export default function contacts(state = initialState, action) {
	switch (action.type) {
		case ADD_CONTACT:
			return [...state, action.payload];
		case REMOVE_CONTACT:
			let newState = state;
			let index = newState.findIndex(((contact) => contact.id === action.payload));
			newState.splice(index, 1);

			return [...newState];
		default:
			return state;
	}
}