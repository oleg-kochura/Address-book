import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link } from 'react-router';

class EditContact extends Component {
	render() {
		// let contact = this.props.state.contacts.find(contact => contact.id === +this.props.params.id);
		return (
			<div>
				<Link to={'/'}>&larr; Back</Link>

				{/*<p className="name">{`${contact.firstName} ${contact.lastName}`}</p>*/}
				{/*<p className="phones">{contact.workPhone}, {contact.mobilePhone}</p>*/}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state: state
	}
}

export default connect(mapStateToProps, null)(EditContact);