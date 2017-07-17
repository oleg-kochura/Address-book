import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link } from 'react-router';

import Form from './Form';

class EditContact extends Component {

	getContactId = () => this.props.contacts.find(contact => contact.id === this.props.params.id);

	render() {
		return (
			<div>
				<Link to={'/'}>&larr; Back</Link>
				<Form editing
				      contact={this.getContactId()}></Form>
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