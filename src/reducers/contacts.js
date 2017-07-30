import { data } from '../data';
import {
	ADD_CONTACT,
	EDIT_CONTACT,
	REMOVE_CONTACT,
	UPDATE_CONTACT } from '../constants';

const initialState = {
	items: data,
	isEditing: null
};

export default function contacts(state = initialState, action) {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				items: [...state.items, action.contact]
			};
		case EDIT_CONTACT:
			return {
				...state,
				isEditing: action.contact
			};
		case UPDATE_CONTACT:
			const newState = state.items.filter(contact => contact.id !== action.contact.id);
			return {
				...state,
				items: [...newState, action.contact]
			};
		case REMOVE_CONTACT:
			return {
				...state,
				items: state.items.filter(contact => contact.id !== action.id)
			};
		default:
			return state;
	}
}