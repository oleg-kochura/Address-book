import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { onAddContact }     from '../actions';
import { Button }           from 'react-bootstrap';
import {
	validateField,
	validateForm }          from '../validation/validate';
import InputsList           from './Inputs-list';
import SelectGroup          from './Select-group';
import Popup                from './Popup';
import { fields }           from './availableFormFields';
import deepAssign           from 'deep-assign';


class AddContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			formIsValid: false,
			showModal: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.addContact = this.addContact.bind(this);
		this.addField = this.addField.bind(this);
	}

	openModal = () => this.setState({showModal: true});
	closeModal= () => this.setState({showModal: false});
	getFieldsToAdd = () => Object.values(this.state.fields).filter(field => field.visible === false);
	getFieldsToValidate = () => Object.values(this.state.fields).filter(field => field.visible === true);


	componentDidMount() {
		const newFields = deepAssign({}, fields);
		this.setState({fields: newFields})
	}

	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		const field = deepAssign({}, this.state.fields[name]);

		field.value = value;
		field.isValid = validateField(name, value);

		this.setState({
			fields: {
				...this.state.fields,
				[name]: field
			}
		}, () => this.setState({formIsValid: validateForm(this.getFieldsToValidate())}));
	}

	addContact(e) {
		e.preventDefault();

		let contact = {};
		const keys = Object.keys(this.state.fields);
		keys.forEach(key => contact[key] = this.state.fields[key].value);

		this.props.onAddContact(contact);
		this.resetForm();
	}

	resetForm() {
		const fields = deepAssign({}, this.state.fields);
		for (let key in fields) {
			fields[key].value = '';
			fields[key].isValid = null;
		}
		this.setState({fields, formIsValid: false});
	}

	addField(name) {
		const fields = deepAssign({}, this.state.fields);
		fields[name].visible = true;

		this.setState({fields}, () => this.setState({
			formIsValid: validateForm(this.getFieldsToValidate())
		}));
	}

	render() {
		return (
			<form onSubmit={this.addContact}>
				<InputsList fields={this.getFieldsToValidate()}
				            onChange={this.handleChange}/>

				<SelectGroup onChange={this.handleChange}/>

				<Button type="submit" disabled={!this.state.formIsValid}>Add contact</Button>

				<Button onClick={this.openModal}>Add field</Button>

				<Popup title="Add new field"
				       show={this.state.showModal}
				       onHide={this.closeModal}
				       fields={this.getFieldsToAdd()}
				       addField={this.addField}/>
			</form>
		);
	}
}

export default connect(null, { onAddContact })(AddContact);