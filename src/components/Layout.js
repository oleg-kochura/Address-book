import React              from 'react';
import GroupsList         from './Groups-list';
import { Nav }            from 'react-bootstrap';
import { NavItem }        from 'react-bootstrap';
import { Navbar }         from 'react-bootstrap';
import { LinkContainer }  from 'react-router-bootstrap';

const Layout = () => {
	return (
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

				<GroupsList/>

			</Navbar>
		</div>
	);
};

export default Layout;