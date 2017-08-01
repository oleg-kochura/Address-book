import React            from 'react';
import { Button }       from 'react-bootstrap';
import { ButtonGroup }  from 'react-bootstrap';

const EditContactFormButtons = ({formIsValid, onFormReset}) => (
	<ButtonGroup justified>

		<ButtonGroup>
			<Button type="submit" disabled={!formIsValid}>Save changes</Button>
		</ButtonGroup>

		<ButtonGroup>
			<Button onClick={onFormReset}>Reset form</Button>
		</ButtonGroup>

	</ButtonGroup>
);

export default EditContactFormButtons;