import React from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

const ContactItem = ({index, contact, onRemove}) => (
		<tr>
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
						<Glyphicon glyph="edit" />
					</Link>
					<Glyphicon glyph="remove"
					           onClick={() => onRemove(contact.id)}/>
				</div>
			</td>
		</tr>
);

export default ContactItem;