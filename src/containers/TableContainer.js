import { connect }          from 'react-redux';
import { onRemoveContact }  from '../actions';
import { onEditContact }    from '../actions';
import { onFormEditing }    from '../actions';
import Table                from '../components/Table';


const getVisibleContacts = (contacts, activeFilter, search) => {

	const sortByName = (a, b) => {
		if (a.firstName > b.firstName) return 1;
		if (a.firstName < b.firstName) return -1;
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
};



const mapStateToProps = ({contacts : {items, isEditing}, common: {activeFilter, search}}) => {
	return {
		contacts: getVisibleContacts(items, activeFilter, search),
		isEditingContact: isEditing
	};
};

const TableContainer = connect(mapStateToProps, {
	onRemoveContact,
	onEditContact,
	onFormEditing
})(Table);

export default TableContainer;