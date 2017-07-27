import React                from 'react';
import Row                  from './Row';

const Table = ({contacts, isEditingContact, onRemoveContact, onEditContact, onFormEditing}) => {
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
					     setEditingMod={onFormEditing}
					     onRemove={onRemoveContact}
					     index={index}
					     contact={contact}
					     isEditingContact={isEditingContact}/>
				)}
			</tbody>
		</table>
	);
};


export default Table;