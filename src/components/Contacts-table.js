import React                from 'react';
import { connect }          from 'react-redux';
import { onRemoveContact }  from '../actions';
import ContactItem          from './Contact-Item';
import { Table }            from 'react-bootstrap';

const ContactsTable = ({contacts, onRemoveContact}) => {
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
				<th>Group</th>
			</tr>
			</thead>
			<tbody>
				{contacts.map((contact, index) =>
					<ContactItem key={index}
					             onRemove={onRemoveContact}
					             index={index}
					             contact={contact}/>
				)}
			</tbody>
		</Table>
	);
};


function mapStateToProps({contacts, common: {activeFilter, search}}) {

	function filterBySearch(contact) {
		return `${contact.firstName} ${contact.lastName}`
				.toLowerCase()
				.indexOf(search.toLowerCase()) !== -1;
	}

	function filterByGroup(contact) {
		return contact.group === activeFilter;
	}

	function filterByGroupAndSearch(contact) {
		return filterBySearch(contact) && filterByGroup(contact);
	}

	function sortByName(a, b) {
		if (a.firstName > b.firstName) return 1;
		if (a.firstName < b.firstName) return -1;
	}


	let filteredContacts = [];

	switch (true) {
		case search && activeFilter === 'General':
			filteredContacts = contacts.filter(filterBySearch).sort(sortByName);
			break;
		case search && activeFilter !== 'General':
			filteredContacts = contacts.filter(filterByGroupAndSearch).sort(sortByName);
			break;
		case activeFilter === 'General':
			filteredContacts = contacts.sort(sortByName);
			break;
		case activeFilter !== 'General':
			filteredContacts = contacts.filter(filterByGroup).sort(sortByName);
			break;
		default:
			filteredContacts = contacts;
	}

	return {
		contacts: filteredContacts
	};
}


export default connect(mapStateToProps, { onRemoveContact })(ContactsTable);