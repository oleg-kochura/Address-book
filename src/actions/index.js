import {
	ADD_CONTACT,
	EDIT_CONTACT,
	REMOVE_CONTACT,
	UPDATE_CONTACT,
	SET_ACTIVE_FILTER,
	SEARCH_CONTACT,
	ADD_GROUP,
	ADD_FIELD,
	UPDATE_FIELD,
	RESET_FORM_FIELDS,
	TOGGLE_MODAL_VIEW,
	VALIDATE_FORM,
	SET_ADDING_MODE,
	SET_EDITING_MODE
} from '../constants';
import { browserHistory } from 'react-router';

//   ACTION CREATOR
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

export function onUpdateContact(contact) {
	browserHistory.push('/contacts');
	return {
		type: UPDATE_CONTACT,
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

export function onSearchContact(searchValue) {
	return {
		type: SEARCH_CONTACT,
		searchValue
	};
}

export function addNewGroup(group) {
	return {
		type: ADD_GROUP,
		group
	};
}

export function onAddField(field) {
	return {
		type: ADD_FIELD,
		field
	};
}

export function onFieldChange(field, value, isValid) {
	return {
		type: UPDATE_FIELD,
		field,
		value,
		isValid
	};
}

export function onFormReset() {
	return {
		type: RESET_FORM_FIELDS
	};
}

export function onToggleModal() {
	return {
		type: TOGGLE_MODAL_VIEW
	};
}

export function onValidateForm(isValid) {
	return {
		type: VALIDATE_FORM,
		isValid
	};
}

export function onFormEditing(contact, validate) {
	return {
		type: SET_EDITING_MODE,
		contact,
		validate
	};
}

export function onFormAdding() {
	return {
		type: SET_ADDING_MODE
	};
}

export const onFieldChangeAndValidateForm = (field, value, isValid, callback) => {
	return (dispatch, getState) => {
		dispatch(onFieldChange(field, value, isValid));
		const fields = getState().fields;
		dispatch(onValidateForm(callback(fields)))
	}
};


