import React        from 'react';
import { Modal }    from 'react-bootstrap';
import { ListGroup }        from 'react-bootstrap';
import { ListGroupItem }    from 'react-bootstrap';

const Popup = ({title, show, onHide, fields, onAddField}) => (
	<Modal show={show} onHide={onHide}>
		<Modal.Header closeButton>
			<Modal.Title>{title}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<ListGroup>
				{fields.map(field =>
					<ListGroupItem onClick={() => onAddField(field.name)}
					               key={field.name}>{field.label}</ListGroupItem>
				)}
			</ListGroup>
		</Modal.Body>
	</Modal>
);

export default Popup;

