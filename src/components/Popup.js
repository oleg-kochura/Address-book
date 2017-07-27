import React      from 'react';
import {
	Modal,
	ListGroup,
	ListGroupItem,
}                 from 'react-bootstrap';

const Popup = ({title, showModal, fields, onToggleModal, onAddField}) => (

	<Modal show={showModal} onHide={onToggleModal}>
		<Modal.Header closeButton>
			<Modal.Title>{title}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<ListGroup>
				{fields.map(field =>
					<ListGroupItem onClick={() => onAddField(field.name)}
					               key={field.name}>
						{field.label}
					</ListGroupItem>
				)}
			</ListGroup>
		</Modal.Body>
	</Modal>
);

export default Popup;