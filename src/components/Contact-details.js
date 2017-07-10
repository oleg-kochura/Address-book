import React, { Component } from 'react';
import { connect }          from 'react-redux';

class ContactDetails extends Component {
	render() {
		let contact = this.props.contacts.find(contact => contact.id === +this.props.params.id);
		return ();
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}

export default connect(mapStateToProps, null)(ContactDetails);