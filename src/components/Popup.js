import React                from 'react';
import { connect }          from 'react-redux';
import {
	onToggleModal,
	onAddField
}                           from '../actions';
import { Modal }            from 'react-bootstrap';
import { ListGroup }        from 'react-bootstrap';
import { ListGroupItem }    from 'react-bootstrap';

const Popup = ({title, showModal, fields, onToggleModal, onAddField}) => {

	const fieldsToAdd =
			Object.values(fields)
						.filter(field => !field.visible)
						.map(field =>
							<ListGroupItem onClick={() => onAddField(field.name)}
							               key={field.name}>

								{field.label}

							</ListGroupItem>
						);

	return (
		<Modal show={showModal} onHide={onToggleModal}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ListGroup>
					{ fieldsToAdd }
				</ListGroup>
			</Modal.Body>
		</Modal>
	)
};

function mapStateToProps({fields, common: {showModal}}) {
	return {
		fields,
		showModal
	}
}

export default connect(mapStateToProps, {
	onToggleModal,
	onAddField
})(Popup);