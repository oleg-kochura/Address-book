import React        from 'react';
import InputItem    from './Input-item';

const sorting = (a, b) => {
	if (a.position > b.position) return 1;
	if (a.position < b.position) return -1;
};

const InputsList = ({fields, onChange}) => (
	<div>
		{fields
			.sort(sorting)
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