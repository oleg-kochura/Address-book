import React            from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl
}                       from 'react-bootstrap';

const SelectGroup = ({groups, selected, onSelect}) => (
	<FormGroup>
		<ControlLabel>Group:</ControlLabel>
		<FormControl value={selected} onChange={onSelect}
		             componentClass="select"
		             name="group">

			{groups.map(group =>
				<option key={group} value={group}>{group}</option>
			)}
		</FormControl>
	</FormGroup>
);

export default SelectGroup;