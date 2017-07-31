import React, { Component } from 'react';
import { connect }          from 'react-redux';
import FormContainer        from './FormContainer';
import { onFormEditing }    from '../actions';
import { validateField }    from '../validation/validate';


class EditContact extends Component {
	constructor(props) {
		super(props);
		this.contact = props.contacts.find(contact => contact.id === props.params.id);

		props.onFormEditing(this.contact, validateField);
	}

	render() {
		return (
			<div>
				<h2 className="text-center">Edit Contact</h2>
				<FormContainer contactId={this.props.params.id}/>
			</div>
		)
	}
}


const mapStateToProps = ({form: {isEditing}, contacts: {items}}) => {
	return {
		isEditing,
		contacts: items
	};
};


export default connect(mapStateToProps, {
	onFormEditing
})(EditContact);