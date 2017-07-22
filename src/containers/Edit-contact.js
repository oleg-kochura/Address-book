import React                from 'react';
import { connect }          from 'react-redux';
import { onEditContact }    from '../actions';
import clone                from 'clone';
import Form                 from './Form';
import { formFields }       from '../availableFormFields';
import { validateField }    from '../validation/validate';


const EditContact = ({contacts, isEditing, params, onEditContact}) => {

	const contact = getContact();
	onEditContact(contact);

	function getContact() {
		return isEditing || contacts.find(contact => contact.id === params.id)
	}

	function parseContactToFieldsValues() {
		let fields = clone(formFields);

		for (let key in fields) {
			fields[key].value = contact[key];
			fields[key].visible = true;
			fields[key].isValid = validateField(key, fields[key].value);
		}
		return fields;
	}

	return (
		<div>
			<h2 className="text-center">Edit Contact</h2>
			<Form editing
			      id={contact.id}
			      fields={parseContactToFieldsValues()}>
			</Form>
		</div>
	)
};

function mapStateToProps({contacts: {items, isEditing}}) {
	return {
		contacts: items,
		isEditing
	}
}


export default connect(mapStateToProps, {onEditContact})(EditContact);