import React                    from 'react';
import { connect }              from 'react-redux';
import PopupContainer           from '../containers/PopupContainer';
import FormContainer            from './FormContainer';
import {
	onAddContact,
	onEditContact,
	onFormReset,
	onToggleModal,
	onFieldChangeAndValidateForm
}                               from '../actions';
import {
	validateField,
	validateForm,
	getFieldsToValidate
}                               from '../validation/validate';

function guid() {
	const s4 = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	return s4() + s4() + s4() + s4() + s4() + s4();
}

const AddContact = (props) => {

	function onValidateForm(fields) {
		return validateForm(getFieldsToValidate(fields));
	}

	function handleChange({ target: { value, name } }) {
		const isValid = validateField(name, value);
		props.onFieldChangeAndValidateForm(name, value, isValid, onValidateForm)
	}

	function onFormSubmit(e) {
		e.preventDefault();

		let contact = {};
		for (let key in props.fields) {
			contact[key] = props.fields[key].value;
		}
		contact.id = guid();

		props.onAddContact(contact);
		props.onEditContact(contact);
		props.onFormReset();
	}

	return (
		<div>
			<h2 className="text-center">Add new contact</h2>

			<FormContainer handleChange={handleChange}
			               onFormSubmit={onFormSubmit}/>

			<PopupContainer title="Add new field"/>
		</div>
	)
};

function mapStateToProps({fields}) {
	return {
		fields
	}
}

export default connect(mapStateToProps, {
	onAddContact,
	onEditContact,
	onFormReset,
	onToggleModal,
	onFieldChangeAndValidateForm
})(AddContact);