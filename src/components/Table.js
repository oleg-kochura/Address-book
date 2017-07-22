import React                from 'react';
import { connect }          from 'react-redux';
import { onRemoveContact }  from '../actions';
import { onEditContact }    from '../actions';
import Row          from './Row';

const Table = ({contacts, isEditingContact, onRemoveContact, onEditContact}) => {
	return (
		<table className="table table-striped table-hover">
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
					<Row key={index}
					     onEdit={onEditContact}
					     onRemove={onRemoveContact}
					     index={index}
					     contact={contact} isEditingContact={isEditingContact}/>
				)}
			</tbody>
		</table>
	);
};


function mapStateToProps({contacts : {items, isEditing}, common: {activeFilter, search}}) {

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
			filteredContacts = items.filter(filterBySearch).sort(sortByName);
			break;
		case search && activeFilter !== 'General':
			filteredContacts = items.filter(filterByGroupAndSearch).sort(sortByName);
			break;
		case activeFilter === 'General':
			filteredContacts = items.sort(sortByName);
			break;
		case activeFilter !== 'General':
			filteredContacts = items.filter(filterByGroup).sort(sortByName);
			break;
		default:
			filteredContacts = items;
	}

	return {
		contacts: filteredContacts,
		isEditingContact: isEditing
	};
}


export default connect(mapStateToProps, {
	onRemoveContact,
	onEditContact
})(Table);