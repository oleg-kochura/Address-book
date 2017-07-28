import React                   from 'react';
import FormContainer            from './FormContainer';


const EditContact = (props) => (
	<div>
		<h2 className="text-center">Edit Contact</h2>
		<FormContainer contactId={props.params.id}/>
	</div>
);


export default EditContact;