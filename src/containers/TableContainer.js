import { connect }          from 'react-redux';
import { onRemoveContact }  from '../actions';
import Table                from '../components/Contacts/Table';
import { createSelector }   from 'reselect';


const contactsSelector = state => [...state.contacts.items];
const filterSelector = state => state.common.activeFilter;
const searchSelector = state => state.common.search;


const filteredContacts = createSelector(
	contactsSelector,
	filterSelector,
	searchSelector,
	(contacts, activeFilter, search) => {

		const sortByName = (a, b) => {
			if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
			if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
		};

		const filterBySearch = (contact) =>
			 `${contact.firstName} ${contact.lastName}`
					.toLowerCase()
					.indexOf(search.toLowerCase()) !== -1;

		const filterByGroup = contact => contact.group === activeFilter;
		const filterByGroupAndSearch = contact => filterBySearch(contact) && filterByGroup(contact);


		switch (true) {
			case search && activeFilter === 'General':
				return contacts.filter(filterBySearch).sort(sortByName);

			case search && activeFilter !== 'General':
				return contacts.filter(filterByGroupAndSearch).sort(sortByName);

			case activeFilter === 'General':
				return contacts.sort(sortByName);

			case activeFilter !== 'General':
				return contacts.filter(filterByGroup).sort(sortByName);

			default:
				return contacts;
		}
	}
);


const mapStateToProps = (state) => {
	return {
		contacts: filteredContacts(state),
		isEditingContact: state.contacts.isEditing
	};
};

const TableContainer = connect(mapStateToProps, {onRemoveContact})(Table);

export default TableContainer;