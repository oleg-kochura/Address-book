import { data } from '../data';
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from '../constants';

const initialState = data;

export default function contacts(state = initialState, action) {
	switch (action.type) {
		case ADD_CONTACT:
			return [...state, action.contact];
		case EDIT_CONTACT:
			const newState = state.filter(contact => contact.id !== action.contact.id);
			return [...newState, action.contact];
		case REMOVE_CONTACT:
			return state.filter(contact => contact.id !== action.id);
		default:
			return state;
	}
}