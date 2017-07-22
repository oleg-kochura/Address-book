import React    from 'react';
import Field    from './Field';

function sorting(a, b) {
	if (a.position > b.position) return 1;
	if (a.position < b.position) return -1;
}

const FieldsList = ({fields, onChange}) => (
	<div>
		{fields
			.sort(sorting)
			.map(field =>
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