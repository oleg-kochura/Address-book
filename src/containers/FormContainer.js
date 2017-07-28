import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import {
	onAddContact,
	onEditContact,
	onUpdateContact,
	onFormReset,
	onFieldChangeAndValidateForm
}                               from '../actions';
import {
	validateField,
	validateForm,
	getFieldsToValidate
}                               from '../validation/validate';
import FieldsContainer          from './FieldsContainer';
import SelectGroupContainer     from './SelectGroupContainer';
import FormButtonsContainer     from './FormButtonsContainer';

const guid = () => {
	const s4 = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	return s4() + s4() + s4() + s4() + s4() + s4();
};

class FormContainer extends Component {

	onValidateForm = (fields) => validateForm(getFieldsToValidate(fields));

	handleChange = ({ target: { value, name } }) => {
		const isValid = validateField(name, value);
		this.props.onFieldChangeAndValidateForm(name, value, isValid, this.onValidateForm)
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		let contact = {};
		Object.keys(this.props.fields)
			.forEach(key => contact[key] = this.props.fields[key].value);

		if (!this.props.isEditing) {
			contact.id = guid();
			this.props.onAddContact(contact);
			this.props.onEditContact(contact);
			this.props.onFormReset();

		} else if (this.props.contactId && this.props.isEditing){
			contact.id = this.props.contactId;
			this.props.onUpdateContact(contact);
		}
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<FieldsContainer onChange={this.handleChange}/>
				<SelectGroupContainer onSelect={this.handleChange}/>
				<FormButtonsContainer/>
			</form>
		)
	}
}

function mapStateToProps({form: {isEditing}, fields}) {
	return {
		fields,
		isEditing
	}
}

export default connect(mapStateToProps, {
	onAddContact,
	onEditContact,
	onFormReset,
	onUpdateContact,
	onFieldChangeAndValidateForm
})(FormContainer);