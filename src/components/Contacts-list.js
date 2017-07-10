import React, { Component } from 'react';
import { connect }          from 'react-redux';
import ContactItem          from './Contact-Item';
import { Table }           from 'react-bootstrap';

class ContactsList extends Component {

	sorting(a, b) {
		if (a.firstName > b.firstName) return 1;
		if (a.firstName < b.firstName) return -1;
	}

	render() {
		let activeFilter = this.props.activeFilter;
		let contacts = this.props.contacts.sort(this.sorting);

		if (activeFilter !== 'General') {
			contacts = contacts.filter(contact => contact.group === activeFilter);
		}

		return (
			<Table bsClass="table table-striped table-hover">
				<thead>
				<tr>
					<th>#</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Email</th>
					<th>Phone number</th>
					<th>Address</th>
				</tr>
				</thead>
				<tbody>
					{contacts.map((contact, index) =>
						<ContactItem key={index} index={index} contact={contact}/>
					)}
				</tbody>

			</Table>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts,
		activeFilter: state.common.activeFilter
	}
}

export default connect(mapStateToProps, null)(ContactsList);