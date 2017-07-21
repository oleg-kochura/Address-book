import React                from 'react';
import { connect }          from 'react-redux';
import clone                from 'clone';
import Form                 from './Form';
import { formFields }       from '../availableFormFields';
import { validateField }    from '../validation/validate';


const EditContact = ({contacts, params: {id} }) => {

	function findContactById() {
		return contacts.find(contact => contact.id === id)
	}

	function parseContactToFieldsValues() {
		let fields = clone(formFields);
		const contact = findContactById();

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
			      id={id}
			      fields={parseContactToFieldsValues()}>
			</Form>
		</div>
	);
};

function mapStateToProps({contacts}) {
	return {
		contacts
	}
}


export default connect(mapStateToProps, null)(EditContact);