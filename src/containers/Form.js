import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { onAddContact }         from '../actions';
import { onEditContact }        from '../actions';
import { onUpdateContact }      from '../actions';
import { validateField }        from '../validation/validate';
import { validateForm }         from '../validation/validate';
import { getFieldsToValidate }  from '../validation/validate';
import FieldsList               from '../components/Fields-list';
import SelectGroup              from '../components/Select-group';
import Popup                    from '../components/Popup';
import { Button }               from 'react-bootstrap';


function guid() {
	const s4 = () =>
		Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	return s4() + s4() + s4() + s4() + s4() + s4();
}


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formIsValid: false,
			isEditing: props.editing || false,
			showModal: false
		};
		
		this.fields = props.fields;
	}

	handleChange = ({ target: { value, name } }) => {
		this.fields[name].value = value;
		this.fields[name].isValid = validateField(name, value);
		this.onValidateForm();
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		const contact = this.parseFieldsValuesToContact();

		if (this.state.isEditing) {
			this.props.onUpdateContact(contact);
		} else {
			this.props.onAddContact(contact);
			this.props.onEditContact(contact);
			this.resetForm();
		}
	};

	parseFieldsValuesToContact = () => {
		let contact = {};
		for (let key in this.fields) {
			contact[key] = this.fields[key].value;
		}
		contact.id = this.state.isEditing ? this.props.id : guid();

		return contact;
	};

	resetForm = () => {
		for (let key in this.fields) {
			this.fields[key].value = '';
			this.fields[key].isValid = null;
		}

		this.onValidateForm();
	};

	openModal = () => this.setState({showModal: true});
	closeModal= () => this.setState({showModal: false});

	onValidateForm = () => this.setState({formIsValid: validateForm(getFieldsToValidate(this.fields))});

	getFieldsToAdd = () =>  {
		return Object.values(this.fields)
			.filter(field => !field.visible);
	};

	addField = (name) => {
		this.fields[name].visible = true;
		this.fields[name].position = Object.values(this.fields).filter(field => field.visible).length;
		// this.onValidateForm();
	};

	render() {
		const {groups, fields}  = this.props;
		return (
			<form onSubmit={this.onFormSubmit}>
				<FieldsList fields={getFieldsToValidate(this.fields)}
				            onChange={this.handleChange}/>

				<SelectGroup groups={groups}
				             selected={fields.group.value !== '' ? fields.group.value : 'General'}
				             onSelect={this.handleChange}/>


				{!this.state.isEditing ?

					<div>
						<Button type="submit"
						        disabled={!this.state.formIsValid}>
							Add contact
						</Button>

						<Button onClick={this.openModal}>
							Add field
						</Button>

						<Popup title="Add new field"
						       show={this.state.showModal}
						       onHide={this.closeModal}
						       fields={this.getFieldsToAdd()}
						       onAddField={this.addField}/>
					</div>  :

						<Button type="submit"
								disabled={!this.state.formIsValid}>
							Save changes
						</Button>
				}

				<Button onClick={this.resetForm}>
					Reset form
				</Button>

			</form>
		);
	}
}

function mapStateToProps({groups}) {
	return {
		groups
	}
}

export default connect(mapStateToProps, {
	onAddContact,
	onEditContact,
	onUpdateContact,
})(Form);