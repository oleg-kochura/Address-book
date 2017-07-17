import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
	onAddContact,
	onEditContact }         from '../actions';
import { Button }           from 'react-bootstrap';
import {
	validateField,
	validateForm }          from '../validation/validate';
import InputsList           from './Inputs-list';
import SelectGroup          from './Select-group';
import { formFields }       from './availableFormFields';
import Popup                from './Popup';
import { guid }             from '../generateID';
import clone                from 'clone';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			formIsValid: false,
			isEditing: false,
			showModal: false
		};
	}

	componentDidMount() {
		const fields = clone(formFields);
		if (this.props.editing) {
			let contact = this.props.contact;

			for (let key in fields) {
				fields[key].value = contact[key];
				fields[key].visible = true;
				fields[key].isValid = validateField(key, fields[key].value)
			}

			this.setState(
				{fields, isEditing: true},
				() => this.onValidateForm()
			);

		} else {
			this.setState({fields});
		}
	}

	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			fields: {
				...this.state.fields,
				[name]: {
					...this.state.fields[name],
					value,
					isValid: validateField(name, value)
				}
			}
		}, () => this.onValidateForm());
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		let contact = {};
		const id = this.state.isEditing ? this.props.contact.id : guid();

		for (let key in this.state.fields) {
			contact[key] = this.state.fields[key].value;
			contact.id = id;
		}

		if (this.state.isEditing) {
			this.props.onEditContact(contact);
		} else {
			this.props.onAddContact(contact);
			this.resetForm();
		}
	};

	resetForm = () => {
		const fields = clone(this.state.fields);
		for (let key in fields) {
			fields[key].value = '';
			fields[key].isValid = null;
		}
		this.setState({fields, formIsValid: false});
	};


	openModal = () => this.setState({showModal: true});
	closeModal= () => this.setState({showModal: false});

	onValidateForm = () => this.setState({formIsValid: validateForm(this.getFieldsToValidate())});

	getFieldsToValidate = () => {
		return Object.values(this.state.fields)
			.filter(field => field.visible === true);
	};

	getFieldsToAdd = () =>  {
		return Object.values(this.state.fields)
			.filter(field => field.visible === false);
	};

	addField = (name) => {
		let fields = clone(this.state.fields);
		fields[name].visible = true;
		this.setState({fields}, () => this.onValidateForm());
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<InputsList fields={this.getFieldsToValidate()}
				            onChange={this.handleChange}/>

				<SelectGroup groups={this.props.groups}
				             selected={this.props.contact ? this.props.contact.group : 'General'}
				             onSelect={this.handleChange}/>

				<Button type="submit"
						disabled={!this.state.formIsValid}>
						{
							this.state.isEditing
							? 'Save changes'
							: 'Add contact'
						}
				</Button>

				<Button onClick={this.openModal}
				        className={this.state.isEditing ? 'hide' : null}>Add field</Button>

				<Button onClick={this.resetForm}>Reset form</Button>

				<Popup title="Add new field"
				       show={this.state.showModal}
				       onHide={this.closeModal}
				       fields={this.getFieldsToAdd()}
				       onAddField={this.addField}/>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		groups: state.groups
	}
}

export default connect(mapStateToProps, {
	onAddContact,
	onEditContact
})(Form);