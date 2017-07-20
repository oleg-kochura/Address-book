import React        from 'react';
import { connect }  from 'react-redux';
import Form         from './Form';


const EditContact = ({contacts, params: {id} }) => {

	const getContactById = () => contacts.find(contact => contact.id === id);

	return (
		<div>
			<h2 className="text-center">Edit Contact</h2>
			<Form editing
			      contact={getContactById()}></Form>

		</div>
	);
};

function mapStateToProps({contacts}) {
	return {
		contacts
	}
}


export default connect(mapStateToProps, null)(EditContact);