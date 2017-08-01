import React      from 'react';
import {
	Navbar,
	FormGroup,
	FormControl,
	ControlLabel
}                 from 'react-bootstrap';


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


export default Search;