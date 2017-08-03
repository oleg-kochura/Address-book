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
			return value ? Boolean(value.match(/^[(]\d{3}[)]\s\d{3}-\d{4}/)) : null;
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

export function getFieldsToValidate(fields) {
	return Object.values(fields)
		.filter(field => field.visible && field.name !== 'group');
}

export function validateForm(fields) {
	return fields.every(key => key.isValid || key.isValid === null);
}
