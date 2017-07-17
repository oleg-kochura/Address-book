import React            from 'react';
import { FormGroup }    from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl }  from 'react-bootstrap';

const SelectGroup = ({groups, selected, onSelect}) => (
	<FormGroup>
		<ControlLabel>Group:</ControlLabel>
		<FormControl defaultValue={selected} onChange={onSelect}
		             componentClass="select"
		             name="group">

			{groups.map((group, index) =>
				<option key={index} value={group}>{group}</option>
			)}
		</FormControl>
	</FormGroup>
);

export default SelectGroup;