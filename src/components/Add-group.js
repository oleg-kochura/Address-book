import React, { Component } from 'react';
import { Button }           from 'react-bootstrap';
import { FormGroup }           from 'react-bootstrap';


function checkIfGroupExists(groups, newGroup) {
	return groups.some(group => {
		return group.toLowerCase() === newGroup.toLowerCase();
	});
}

class AddGroup extends Component {
	state = { expanded: false };

	componentWillReceiveProps(nextProps) {
		!nextProps.isOpen && this.setState({expanded: false});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		let value = this.textInput.value;

		if (!checkIfGroupExists(this.props.groups,value)){
			this.props.onAddGroup(value);
			this.textInput.value = '';

		} else {
			alert('Group already exists. Please enter another group');
		}
	};

	render() {
		return (
			<form className="add-group" onSubmit={this.onFormSubmit}>
				<Button bsSize="xsmall"
				        onClick={ () => this.setState({expanded: true}) }>
					Add new...
				</Button>

				{this.state.expanded &&


					<FormGroup bsSize="small">
						<input type="text"
						       autoFocus
						       className="form-control"
						       name="textInput"
						       ref={(input) => this.textInput = input}
						       defaultValue="New group"/>
					</FormGroup>
				}
			</form>
		)
	}
}


export default AddGroup;