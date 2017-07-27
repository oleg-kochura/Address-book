import React                  from 'react';
import { connect }            from 'react-redux';
import {
	onFormReset,
	onToggleModal
}                             from '../actions';
import AddContactFormButtons  from '../components/AddContactFormButtons';
import EditContactFormButtons from '../components/EditContactFormButtons';


const FormButtonsContainer = ({form, onFormReset, onToggleModal}) => (
	form.isEditing

		? <EditContactFormButtons formIsValid={form.formIsValid}
		                          onFormReset={onFormReset}/>

		: <AddContactFormButtons formIsValid={form.formIsValid}
		                         onFormReset={onFormReset}
		                         onToggleModal={onToggleModal}/>
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