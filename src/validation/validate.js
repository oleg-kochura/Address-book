export function validateField(fieldName, value) {
	switch(fieldName) {
		case 'firstName':
		case 'lastName':
		case 'country':
		case 'city':
			return value.length > 2;
		case 'email':
			return Boolean(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
		case 'workPhone':
		case 'mobilePhone':
			return Boolean(value.match(/^\d{10}$/));
		case 'group':
			return true;
		default:
			return false;
	}
}

export function validateForm(formFields) {
	return Object.values(formFields).every(key => key.isValid === true);
}
