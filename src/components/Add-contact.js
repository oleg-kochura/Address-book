import React                    from 'react';
import { connect }              from 'react-redux';
import Popup                    from '../components/Popup';
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
import FieldsList               from '../components/Fields-list';
import SelectGroup              from '../components/Select-group';
import { Button }               from 'react-bootstrap';


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

			<form onSubmit={onFormSubmit}>
				<FieldsList fields={getFieldsToValidate(props.fields)}
				            onChange={handleChange}/>

				<SelectGroup groups={props.groups}
				             selected={props.fields.group.value !== '' ? props.fields.group.value : 'General'}
				             onSelect={handleChange}/>

				<Button type="submit"
				        disabled={!props.form.formIsValid}>
					Save contact
				</Button>

				<Button onClick={props.onFormReset}>
					Reset form
				</Button>
				<Button onClick={props.onToggleModal}>
					Add field
				</Button>
			</form>

			<Popup title="Add new field"/>
		</div>
	)
};

function mapStateToProps({form, fields, groups}) {
	return {
		form,
		groups,
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