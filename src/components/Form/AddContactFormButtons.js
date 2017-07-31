import React      from 'react';
import { Button } from 'react-bootstrap';

const AddContactFormButtons = ({formIsValid, onToggleModal, onFormReset}) => (
	<div>
		<Button type="submit" disabled={!formIsValid}>Save contact</Button>
		<Button onClick={onToggleModal}>Add field</Button>
		<Button onClick={onFormReset}>Reset form</Button>
	</div>
);

export default AddContactFormButtons;