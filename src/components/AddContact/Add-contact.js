import React                    from 'react';
import PopupContainer           from '../../containers/PopupContainer';
import FormContainer            from '../../containers/FormContainer';

const AddContact = () => (
	<div>
		<h2 className="text-center">Add new contact</h2>
		<FormContainer/>
		<PopupContainer title="Add new field"/>
	</div>
);

export default AddContact;