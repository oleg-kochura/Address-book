import React                from 'react';
import { Nav }              from 'react-bootstrap';
import { NavItem }          from 'react-bootstrap';
import { Navbar }           from 'react-bootstrap';
import { LinkContainer }    from 'react-router-bootstrap';
import { connect }          from 'react-redux';
import { onFormAdding }     from '../actions';


const Navigation = ({children, onFormAdding}) => (
	<div>
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
	</div>
);


export default connect(null, { onFormAdding })(Navigation);