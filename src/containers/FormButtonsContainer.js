import React                  from 'react';
import { connect }            from 'react-redux';
import { onFormReset }        from '../actions';
import { onToggleModal }      from '../actions';
import AddContactFormButtons  from '../components/Form/AddContactFormButtons';
import EditContactFormButtons from '../components/Form/EditContactFormButtons';


const FormButtonsContainer = ({form, onFormReset, onToggleModal}) => (

	form.isEditing

		? <EditContactFormButtons formIsValid={form.formIsValid} onFormReset={onFormReset}/>

		: <AddContactFormButtons formIsValid={form.formIsValid} onFormReset={onFormReset} onToggleModal={onToggleModal}/>

);

function mapStateToProps({form}) {
	return {
		form
	}
}

export default connect(mapStateToProps, {
	onFormReset,
	onToggleModal
})(FormButtonsContainer);