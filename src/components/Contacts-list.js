import React, { Component } from 'react';
import { connect }          from 'react-redux';
import ContactItem          from './Contact-Item';

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
			<ul className="contacts-list">
				{contacts.map(contact =>
					<ContactItem key={contact.id} contact={contact}/>
				)}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts,
		activeFilter: state.groups.activeFilter
	}
}

export default connect(mapStateToProps, null)(ContactsList);