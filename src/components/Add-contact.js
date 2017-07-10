import React, { Component } from 'react';
import { onAddContact }     from '../actions';
import { connect }          from 'react-redux';
import { Button }           from 'react-bootstrap';
import InputItem            from './Input-item';
import InputsList            from './Inputs-list';
import SelectGroup            from './Select-group';
import { validateField, validateForm }    from '../validation/validate';
import { fields }           from './availableFormFields';


class AddContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			formIsValid: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.addContact = this.addContact.bind(this);
	}

	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		const isValid = validateField(name, value);
		const fields = {
							...this.state.fields,
							[name]: {
								value,
								isValid
							}
						};

		this.setState({fields}, () => this.setState({
			formIsValid: validateForm(this.state.fields)
		}));
	}

	addContact(e) {
		let contact = {};
		const keys = Object.keys(this.state.fields);
		keys.forEach(key => contact[key] = this.state.fields[key].value);

		this.props.onAddContact(contact);
		this.resetForm();
		e.preventDefault();
	}

	resetForm() {
		this.setState({fields: {}})
	}

	setInitialValue(inputName) {
		return this.state.fields[inputName] ? this.state.fields[inputName].value : '';
	}

	getFieldValidationState(inputName) {
		if (this.state.fields[inputName]) {
			return this.state.fields[inputName].isValid ? 'success' : 'error';
		}

		else return null;
	}

	render() {
		return (
			<form onSubmit={this.addContact}>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('firstName')} name="firstName" label="First name"
				           valid={this.getFieldValidationState('firstName')}/>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('lastName')} name="lastName" label="Last name"
				           valid={this.getFieldValidationState('lastName')}/>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('country')} name="country" label="Country"
				           valid={this.getFieldValidationState('country')}/>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('city')} name="city" label="City"
				           valid={this.getFieldValidationState('city')}/>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('email')}
				           name="email" label="Email" valid={this.getFieldValidationState('email')}/>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('workPhone')} name="workPhone" label="Work phone"
				           valid={this.getFieldValidationState('workPhone')}/>

				<InputItem onChange={this.handleChange}
				           value={this.setInitialValue('mobilePhone')} name="mobilePhone" label="Mobile phone"
				           valid={this.getFieldValidationState('mobilePhone')}/>

				<SelectGroup onChange={this.handleChange}/>

				<Button type="submit" disabled={!this.state.formIsValid}>Add contact</Button>

			</form>
		);
	}
}

export default connect(null, { onAddContact })(AddContact);