import {
	VALIDATE_FORM,
	SET_EDITING_MODE,
	SET_ADDING_MODE,
}                     from '../constants';


const initialState = {
	formIsValid: false,
	isEditing: false,
};

export default function form(state = initialState, action) {
	switch (action.type) {
		case VALIDATE_FORM:
			return {
				...state,
				formIsValid: action.isValid
			};
		case SET_ADDING_MODE:
			return {
				...state,
				isEditing: false
			};
		case SET_EDITING_MODE:
			return {
				...state,
				isEditing: true
			};
		default:
			return state;
	}
}