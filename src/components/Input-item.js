import React from 'react';
import { FormGroup }        from 'react-bootstrap';
import { ControlLabel }     from 'react-bootstrap';
import { FormControl }      from 'react-bootstrap';

const InputItem = ({onChange, value, name, label, valid}) => (
	<FormGroup validationState={valid}>
		<ControlLabel>{label}</ControlLabel>
		<input className="form-control" type="text" placeholder={label}
		       name={name}
		       value={value}
		       onChange={onChange}/>
		<FormControl.Feedback />
	</FormGroup>
);

export default InputItem;


