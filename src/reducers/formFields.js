import { formFields } from '../availableFormFields.js';
import {
	ADD_FIELD,
	UPDATE_FIELD,
	RESET_FORM_FIELDS,
	SET_ADDING_MODE,
	SET_EDITING_MODE
} from '../constants';

import clone                from 'clone';

export default function fields(state = clone(formFields), action) {
	switch (action.type) {
		case ADD_FIELD:
			return {
				...state,
				[action.field]: {
					...state[action.field],
					visible: true,
					position: Object.values(state).filter(field => field.visible).length
				}
			};
		case UPDATE_FIELD:
			return {
					...state,
					[action.field]: {
						...state[action.field],
						value: action.value,
						isValid: action.isValid
					}
			};
		case RESET_FORM_FIELDS:
			let fields = clone(state);
			for (let key in fields) {
				fields[key].value = '';
				fields[key].isValid = null;
			}
			return fields;
		case SET_ADDING_MODE:
			return Object.assign({}, state, clone(formFields));
		case SET_EDITING_MODE:
			let fieldsOnEdit = clone(state);
			for (let key in fieldsOnEdit) {
				fieldsOnEdit[key].value = action.contact[key];
				fieldsOnEdit[key].visible = true;
				fieldsOnEdit[key].isValid = action.validate(key, fieldsOnEdit[key].value);
			}
			return fieldsOnEdit;
		default:
			return state;
	}
}