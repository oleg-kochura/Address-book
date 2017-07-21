import React            from 'react';
import Form             from '../containers/Form';
import { formFields }   from '../availableFormFields';
import clone            from 'clone';

const AddContact = () => {
	const fields = clone(formFields);

	return (
		<div>
			<h2 className="text-center">Add new contact</h2>
			<Form fields={fields}></Form>
		</div>
	)
};

export default AddContact;