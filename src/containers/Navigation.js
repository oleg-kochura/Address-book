import React                from 'react';
import { connect }          from 'react-redux';
import { onFormAdding }     from '../actions';
import { Nav }              from 'react-bootstrap';
import { NavItem }          from 'react-bootstrap';
import { Navbar }           from 'react-bootstrap';
import { LinkContainer }    from 'react-router-bootstrap';


const Navigation = ({children, onFormAdding}) => (
	<Navbar>

		<Navbar.Header>
			<LinkContainer to="/" >
				<NavItem>
					<Navbar.Brand>Address book</Navbar.Brand>
				</NavItem>
			</LinkContainer>
		</Navbar.Header>

		<Nav>
			<LinkContainer to="/add-contact" onClick={() => onFormAdding()}>
				<NavItem>Add Contact</NavItem>
			</LinkContainer>
			<LinkContainer to="/contacts" >
				<NavItem>Contacts</NavItem>
			</LinkContainer>
		</Nav>

		{children}

	</Navbar>
);


export default connect(null, { onFormAdding })(Navigation);