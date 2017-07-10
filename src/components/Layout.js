import React              from 'react';
import { Nav }            from 'react-bootstrap';
import { NavItem }        from 'react-bootstrap';
import { Navbar }         from 'react-bootstrap';
import { LinkContainer }  from 'react-router-bootstrap';

const Layout = ({children}) => (
	<div>
		<Navbar>

			<Navbar.Header>
				<Navbar.Brand>Address book</Navbar.Brand>
			</Navbar.Header>

			<Nav>
				<LinkContainer to="/add-contact">
					<NavItem>Add Contact</NavItem>
				</LinkContainer>
				<LinkContainer to="/">
					<NavItem>Contacts</NavItem>
				</LinkContainer>
			</Nav>

			{children}

		</Navbar>
	</div>
);

export default Layout;