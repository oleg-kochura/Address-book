import React                   from 'react';
import {connect}              from 'react-redux';
import {
	onUpdateContact,
	onFieldChangeAndValidateForm,
	onFormReset
}                               from '../actions';
import {
	validateField,
	validateForm,
	getFieldsToValidate
}                               from '../validation/validate';
import FormContainer            from '../components/FormContainer';


const EditContact = (props) => {

	function onValidateForm(fields) {
		return validateForm(getFieldsToValidate(fields));
	}

	function handleChange({target: {value, name}}) {
		const isValid = validateField(name, value);
		props.onFieldChangeAndValidateForm(name, value, isValid, onValidateForm)
	}

	function onFormSubmit(e) {
		e.preventDefault();

		let contact = {};
		for (let key in props.fields) {
			contact[key] = props.fields[key].value;
		}
		contact.id = props.params.id;

		props.onUpdateContact(contact);
	}

	return (
		<div>
			<h2 className="text-center">Edit Contact</h2>
			<FormContainer handleChange={handleChange}
			               onFormSubmit={onFormSubmit}/>
		</div>
	)
};

function mapStateToProps({fields}) {
	return {
		fields
	}
}


export default connect(mapStateToProps, {
	onUpdateContact,
	onFieldChangeAndValidateForm,
	onFormReset
})(EditContact);






// const EditContact = ({contacts, isEditing, params, onEditContact}) => {
//
// 	const contact = getContact();
// 	onEditContact(contact);
//
// 	function getContact() {
// 		return isEditing || contacts.find(contact => contact.id === params.id)
// 	}
//
// 	function parseContactToFieldsValues() {
// 		let fields = clone(formFields);
//
// 		for (let key in fields) {
// 			fields[key].value = contact[key];
// 			fields[key].visible = true;
// 			fields[key].isValid = validateField(key, fields[key].value);
// 		}
// 		return fields;
// 	}
//
// 	return (
// 		<div>
// 			<h2 className="text-center">Edit Contact</h2>
// 			<Form editing
// 			      id={contact.id}
// 			      fields={parseContactToFieldsValues()}>
// 			</Form>
// 		</div>
// 	)
// };
//
// function mapStateToProps({contacts: {items, isEditing}}) {
// 	return {
// 		contacts: items,
// 		isEditing
// 	}
// }
//
//
// export default connect(mapStateToProps, {onEditContact})(EditContact);