import React            from 'react';
import { Button }       from 'react-bootstrap';
import { ButtonGroup }  from 'react-bootstrap';

const AddContactFormButtons = ({formIsValid, onToggleModal, onFormReset}) => (
	<ButtonGroup justified>

		<ButtonGroup>
			<Button type="submit" disabled={!formIsValid}>Save contact</Button>
		</ButtonGroup>

		<ButtonGroup>
			<Button onClick={onToggleModal}>Add field</Button>
		</ButtonGroup>

		<ButtonGroup>
			<Button onClick={onFormReset}>Reset form</Button>
		</ButtonGroup>

	</ButtonGroup>
);

export default AddContactFormButtons;