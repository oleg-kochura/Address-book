import React                    from 'react';
import FieldsContainer          from '../containers/FieldsContainer';
import SelectGroupContainer          from '../containers/SelectGroupContainer';
import FormButtonsContainer          from '../containers/FormButtonsContainer';

const FormContainer = (props) => {
	return (
		<form onSubmit={props.onFormSubmit}>
			<FieldsContainer onChange={props.handleChange}/>
			<SelectGroupContainer onSelect={props.handleChange}/>
			<FormButtonsContainer/>
		</form>
	)
};

export default FormContainer;