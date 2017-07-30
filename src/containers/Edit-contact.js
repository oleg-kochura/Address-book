import React                   from 'react';
import { connect }          from 'react-redux';
import FormContainer            from './FormContainer';
import { onFormEditing }    from '../actions';
import { onEditContact }    from '../actions';
import { validateField }  from '../validation/validate';


const EditContact = (props) => {

	const contact = props.contacts.find(contact => contact.id === props.params.id);

	if(!props.isEditing) {
		props.onFormEditing(contact, validateField);
	}

	props.onEditContact(contact);

	return (
		<div>
			<h2 className="text-center">Edit Contact</h2>
			<FormContainer contactId={props.params.id}/>
		</div>
	);
};



const mapStateToProps = ({form: {isEditing}, contacts: {items}}) => {
	return {
		isEditing,
		contacts: items
	};
};


export default connect(mapStateToProps, {
	onFormEditing,
	onEditContact
})(EditContact);