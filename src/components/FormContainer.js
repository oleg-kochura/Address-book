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

const FormContainer = (props) => {

	return (
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
	onFormReset,
	onToggleModal
})(FormContainer);