import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link } from 'react-router';
import InputsList           from './Inputs-list';
import { fields }           from './availableFormFields';
import {
	validateField,
	validateForm }          from '../validation/validate';

class EditContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {},
			formIsValid: false
		};
		this.handleEditing = this.handleEditing.bind(this);
	}

	componentDidMount() {
		const contact = this.props.contacts.find(contact => contact.id === this.props.params.id);
		let newFields = {};

		for (let key in fields) {
			newFields[key] = {...fields[key]};
			newFields[key].value = contact[key];
		}

		this.setState({fields: newFields})
	}

	getFieldsToValidate() {
		return Object.values(this.state.fields).filter(field => field.visible === true);
	}

	handleEditing(e) {
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
		}, () => this.setState({formIsValid: validateForm(this.getFieldsToValidate())}));
	}

	render() {
		return (
			<div>
				<Link to={'/'}>&larr; Back</Link>
				<InputsList fields={Object.values(this.state.fields)}
				            onChange={this.handleEditing}></InputsList>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}

export default connect(mapStateToProps, null)(EditContact);