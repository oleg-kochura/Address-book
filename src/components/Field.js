import React                        from 'react';
import { FormGroup }                from 'react-bootstrap';
import { ControlLabel }             from 'react-bootstrap';
import { FormControl }              from 'react-bootstrap';
import { getFieldValidationState }  from '../validation/validate';
import InputMask                    from 'react-input-mask';


const Field = ({onChange, value, name, type, label, valid}) => (
	<FormGroup validationState={getFieldValidationState(valid)}>
		<ControlLabel>
			{label}
		</ControlLabel>

		<InputMask className="form-control"
		           onChange={onChange}
		           type={type}
		           name={name}
		           value={value}
		           mask={type === 'tel' ? '(999) 999-9999' : null}
		           maskChar="x"
		           placeholder={label}/>

		<FormControl.Feedback />
	</FormGroup>
);


export default Field;


