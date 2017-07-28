import React              from 'react';
import { Link }           from 'react-router';
import { Glyphicon }      from 'react-bootstrap';
import { validateField }  from '../validation/validate';


const Row = ({index, contact, onEdit, onRemove, isEditingContact, setEditingMod}) => {

	function setActiveRow() {
		return contact.id === isEditingContact.id ? 'last-modified' : null;
	}

	function onRoute(contact) {
		onEdit(contact);
		setEditingMod(contact, validateField);
	}

	return (
		<tr className={isEditingContact && setActiveRow()}>
			<td>{index + 1}</td>
			<td>{contact.firstName}</td>
			<td>{contact.lastName}</td>
			<td>{contact.email}</td>
			<td>{contact.workPhone}, {contact.mobilePhone}</td>
			<td>{contact.country}, {contact.city}</td>
			<td>{contact.group}</td>
			<td>
				<div className="buttons-container">
					<Link to={`/edit-contact/${contact.id}`}>
						<Glyphicon glyph="edit" onClick={() => onRoute(contact)}/>
					</Link>
					<Glyphicon glyph="remove" onClick={() => onRemove(contact.id)}/>
				</div>
			</td>
		</tr>
	)
};

export default Row;