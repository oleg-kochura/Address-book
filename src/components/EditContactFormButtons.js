import React      from 'react';
import { Button } from 'react-bootstrap';

const EditContactFormButtons = ({formIsValid, onFormReset}) => (
	<div>
		<Button type="submit" disabled={formIsValid}>Save changes</Button>
		<Button onClick={onFormReset}>Reset form</Button>
	</div>
);

export default EditContactFormButtons;