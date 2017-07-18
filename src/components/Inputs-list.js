import React        from 'react';
import InputItem    from './Input-item';
import { sorting }  from '../helpers';

const InputsList = ({fields, onChange}) => (
	<div>
		{fields
			.sort((a, b) => sorting(a.position, b.position))
			.map(field =>
					<InputItem key={field.name}
					           onChange={onChange}
					           value={field.value}
					           name={field.name}
					           label={field.label}
					           valid={field.isValid}/>
			)
		}
	</div>
);


export default InputsList;