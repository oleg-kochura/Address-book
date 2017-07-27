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
import FieldsList               from '../components/Fields-list';
import {Button}               from 'react-bootstrap';
import SelectGroup              from '../components/Select-group';


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

			<form onSubmit={onFormSubmit}>
				<FieldsList fields={getFieldsToValidate(props.fields)}
				            onChange={handleChange}/>

				<SelectGroup groups={props.groups}
				             selected={props.fields.group.value !== '' ? props.fields.group.value : 'General'}
				             onSelect={handleChange}/>

				<Button type="submit"
				        disabled={!props.form.formIsValid}>
					Save changes
				</Button>

				<Button onClick={props.onFormReset}>
					Reset form
				</Button>
			</form>
		</div>
	)
};

function mapStateToProps({fields, form, groups}) {
	return {
		fields,
		groups,
		form
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