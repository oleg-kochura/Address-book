import React from 'react';
import { onRemoveContact } from '../actions';
import { connect }          from 'react-redux';
import { Link } from 'react-router';

const ContactItem = ({index, contact, onRemoveContact}) => (
		<tr>
			<td>{index + 1}</td>
			<td>{contact.firstName}</td>
			<td>{contact.lastName}</td>
			<td>{contact.email}</td>
			<td>{contact.workPhone}, {contact.mobilePhone}</td>
			<td>{contact.country}, {contact.city}</td>
			<td>
				<div className="buttons-container">
					<Link to={`/edit-contact/${contact.id}`}>
						<span className="glyphicon glyphicon-edit"></span>
					</Link>
					<span onClick={() => onRemoveContact(contact.id)}
					      className="glyphicon glyphicon-remove"></span>
				</div>
			</td>
		</tr>
);

export default connect(null, {onRemoveContact})(ContactItem);