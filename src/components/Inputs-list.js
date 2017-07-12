import React                        from 'react';
import InputItem                    from './Input-item';

const InputsList = ({fields, onChange}) => (
	<div>
		{fields.map(field => {
			return <InputItem key={field.name}
			                  onChange={onChange}
			                  value={field.value}
			                  name={field.name}
			                  label={field.label}
			                  valid={field.isValid}/>

		})}
	</div>
);

export default InputsList;