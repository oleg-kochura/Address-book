import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link } from 'react-router';

import Form from './Form';

class EditContact extends Component {

	getContactId = () => this.props.contacts.find(contact => contact.id === this.props.params.id);

	render() {
		return (
			<div>
				<h2 className="text-center">Edit Contact</h2>
				<Form editing
				      contact={this.getContactId()}></Form>
				<Link to={'/'}>&larr; Back</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}

export default connect(mapStateToProps, null)(EditContact);