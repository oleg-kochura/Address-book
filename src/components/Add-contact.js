import React, { Component } from 'react';
import { onAddContact }     from '../actions';
import { connect }          from 'react-redux';
import { FormGroup }        from 'react-bootstrap';
import { FormControl }      from 'react-bootstrap';
import { Button }           from 'react-bootstrap';

class AddContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			formErrors: {},
			formIsValid: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.addContact = this.addContact.bind(this);
	}

	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		const isValid = this.validateField(name, value);
		const fields = {
							...this.state.fields,
							[name]: {
								value,
								isValid
							}
						};

		this.setState({fields});
		setTimeout(this.validateForm.bind(this), 0);	//КОСТЫЛЬЬЬЬЬЬЬЬЬЬЬЬЬ
	}

	addContact(e) {
		let contact = {};
		const keys = Object.keys(this.state.fields);
		keys.forEach(key => contact[key] = this.state.fields[key].value);

		this.props.onAddContact(contact);
		this.resetForm();
		e.preventDefault();
	}

	validateForm() {
		console.log(this.state);
		const formIsValid = Object.values(this.state.fields).every(key => key.isValid === true);
		this.setState({formIsValid});
	}

	resetForm() {
		this.setState({fields: {}})
	}

	validateField(fieldName, value) {
		switch(fieldName) {
			case 'firstName':
			case 'lastName':
			case 'country':
			case 'city':
				return value.length > 2;
			case 'email':
				return Boolean(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
			case 'workPhone':
			case 'mobilePhone':
				return Boolean(value.match(/^\d{10}$/));
			default:
				return false;
		}
	}

	setInitialValue(inputName) {
		if (this.state.fields[inputName]) {
			return this.state.fields[inputName].value;
		}

		else return '';
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
				<FormGroup validationState={this.getFieldValidationState('firstName')}>
					<label htmlFor="firstName">First name</label>
					<input className="form-control" type="text" placeholder="First name" required
					       name="firstName"
					       value={this.setInitialValue('firstName')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup validationState={this.getFieldValidationState('lastName')}>
					<label htmlFor="lastName">Last name</label>
					<input className="form-control" type="text" placeholder="Last name" required
					       name="lastName"
					       value={this.setInitialValue('lastName')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup validationState={this.getFieldValidationState('country')}>
					<label htmlFor="country">Country</label>
					<input className="form-control" type="text" placeholder="Country"
					       name="country"
					       value={this.setInitialValue('country')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup validationState={this.getFieldValidationState('city')}>
					<label htmlFor="city">City</label>
					<input className="form-control" type="text" placeholder="City"
					       name="city"
					       value={this.setInitialValue('city')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup validationState={this.getFieldValidationState('email')}>
					<label htmlFor="email">Email</label>
					<input className="form-control" type="email" placeholder="Email"
					       name="email"
					       value={this.setInitialValue('email')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup validationState={this.getFieldValidationState('workPhone')}>
					<label htmlFor="workPhone">Work phone</label>
					<input className="form-control" type="tel" placeholder="Work phone"
					       name="workPhone"
					       value={this.setInitialValue('workPhone')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup validationState={this.getFieldValidationState('mobilePhone')}>
					<label htmlFor="mobilePhone">Mobile Phone</label>
					<input className="form-control" type="tel" placeholder="Mobile Phone"
					       name="mobilePhone"
					       value={this.setInitialValue('mobilePhone')}
					       onChange={this.handleChange}/>
					<FormControl.Feedback />
				</FormGroup>

				<FormGroup>
					<Button type="submit" disabled={!this.state.formIsValid}>Add contact</Button>
				</FormGroup>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}

export default connect(mapStateToProps, { onAddContact })(AddContact);