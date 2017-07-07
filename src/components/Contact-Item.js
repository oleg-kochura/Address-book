import React, { Component } from 'react';
import { onRemoveContact } from '../actions';
import { connect }          from 'react-redux';
import { Link } from 'react-router';

class ContactItem extends Component {

	removeContact(id) {
		this.props.onRemoveContact(id);
	}

	render() {
		let contact = this.props.contact;
		return (
			<li>
				<p className="name">{`${contact.firstName} ${contact.lastName}`}</p>
				<p className="phones">
					{contact.workPhone}, {contact.mobilePhone}
					<button onClick={() => this.removeContact(contact.id)}>X</button>
				</p>
				<Link to={`/edit-contact/${contact.id}`}>Edit contact</Link>

			</li>
		);
	}
}

function mapStateToProps(state) {
	return {
		state: state
	}
}

export default connect(mapStateToProps, {onRemoveContact})(ContactItem);