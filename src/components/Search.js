import React                from 'react';
import { connect }          from 'react-redux';
import { onSearchContact }  from '../actions';
import { Navbar }           from 'react-bootstrap';
import { FormGroup }        from 'react-bootstrap';
import { FormControl }      from 'react-bootstrap';
import { ControlLabel }     from 'react-bootstrap';


const Search = ({ onSearchContact }) => (
	<Navbar.Form pullRight>
		<FormGroup>
			<ControlLabel className="search-label">Search by name:</ControlLabel>
			<FormControl type="text"
			             placeholder="Search"
			             onChange={(e) => onSearchContact(e.target.value)} />
		</FormGroup>
	</Navbar.Form>
);


export default connect(null, { onSearchContact })(Search);