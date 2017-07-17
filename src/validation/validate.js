export function validateField(fieldName, value) {
	switch(fieldName) {
		case 'firstName':
		case 'lastName':
		case 'country':
		case 'city':
			return value ? value.length > 2 : null;
		case 'email':
			return value ? Boolean(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) : null;
		case 'workPhone':
		case 'mobilePhone':
			return value ? Boolean(value.match(/^\d{10}$/)) : null;
		case 'group':
			return true;
		default:
			return false;
	}
}

export function getFieldValidationState(isValid) {
	switch (isValid) {
		case true:
			return 'success';
		case false:
			return 'error';
		default:
			return null;
	}
}

export function validateForm(formFields) {
	return formFields.every(key => key.isValid === true || key.isValid === null);
}
