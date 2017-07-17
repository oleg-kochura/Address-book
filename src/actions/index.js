import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, SET_ACTIVE_FILTER, ADD_GROUP } from '../constants';

//   ACTION CREATORS

export function onAddContact(contact) {
	return {
		type: ADD_CONTACT,
		contact
	};
}

export function onEditContact(contact) {
	return {
		type: EDIT_CONTACT,
		contact
	};
}

export function onRemoveContact(id) {
	return {
		type: REMOVE_CONTACT,
		id
	};
}

export function setActiveFilter(activeFilter) {
	return {
		type: SET_ACTIVE_FILTER,
		activeFilter
	};
}

export function addNewGroup(group) {
	return {
		type: ADD_GROUP,
		group
	};
}