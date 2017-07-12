import React        from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl
}                   from 'react-bootstrap';
import { getFieldValidationState }  from '../validation/validate';


const InputItem = ({onChange, value, name, type, label, valid}) => (
	<FormGroup validationState={getFieldValidationState(valid)}>
		<ControlLabel>{label}</ControlLabel>
		<input className="form-control"
		       onChange={onChange}
		       type={type}
		       name={name}
		       value={value}
		       placeholder={label}/>
		<FormControl.Feedback />
	</FormGroup>
);

export default InputItem;


