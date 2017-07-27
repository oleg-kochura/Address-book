import React    from 'react';
import Field    from './Field';

const FieldsList = ({fields, onChange}) => (
	<div>
		{fields.map(field =>
				<Field key={field.name}
				       onChange={onChange}
				       value={field.value}
				       name={field.name}
				       type={field.type}
				       label={field.label}
				       valid={field.isValid}/>
			)
		}
	</div>
);

export default FieldsList;