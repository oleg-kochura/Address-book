import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { onAddContact }     from '../actions';
import { onEditContact }    from '../actions';
import clone                from 'clone';
import { validateField }    from '../validation/validate';
import { validateForm }     from '../validation/validate';
import { formFields }       from '../availableFormFields';
import InputsList           from '../components/Inputs-list';
import SelectGroup          from '../components/Select-group';
import Popup                from '../components/Popup';
import { Button }           from 'react-bootstrap';


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
				fields[key].isValid = validateField(key, fields[key].value);
			}

			console.log(fields);

			this.setState(
				{fields, isEditing: true},
				() => this.onValidateForm()
			);
		} else {
			this.setState({fields});
		}
	}

	handleChange = ({ target: { value, name } }) => {
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
			.filter(field => field.visible === true && field.name !== 'group');
	};

	getFieldsToAdd = () =>  {
		return Object.values(this.state.fields)
			.filter(field => field.visible === false);
	};

	addField = (name) => {
		let fields = clone(this.state.fields);
		fields[name].visible = true;
		fields[name].position = Object.values(fields).filter(field => field.visible).length;
		this.setState({fields}, () => this.onValidateForm());
	};

	render() {
		const {groups, contact}  = this.props;

		return (
			<form onSubmit={this.onFormSubmit}>
				<InputsList fields={this.getFieldsToValidate()}
				            onChange={this.handleChange}/>

				<SelectGroup groups={groups}
				             selected={contact ? contact.group : 'General'}
				             onSelect={this.handleChange}/>

				<Button type="submit"
						disabled={!this.state.formIsValid}>
						{this.state.isEditing
							? 'Save changes'
							: 'Add contact'
						}
				</Button>

				<Button onClick={this.openModal}
				        className={this.state.isEditing && 'hide'}>Add field</Button>

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

function mapStateToProps({groups}) {
	return {
		groups
	}
}

export default connect(mapStateToProps, {
	onAddContact,
	onEditContact
})(Form);