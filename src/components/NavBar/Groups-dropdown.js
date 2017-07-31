import React, { Component } from 'react';
import { MenuItem }         from 'react-bootstrap';
import { Nav }              from 'react-bootstrap';
import { NavDropdown }      from 'react-bootstrap';
import AddGroup             from './Add-group';
import GroupsList           from './GroupsList';


class GroupsDropDown extends Component {
	state = {
		isOpen: false,
		addGroupMode: false,
		inputValue: ''
	};

	enableAddingMode = () => this.setState({addGroupMode: true});
	handleInputChange = value => this.setState({inputValue: value});
	toggleDropDown = isOpen => this.setState({isOpen, addGroupMode: false, inputValue: 'New group'});

	submitForm = (e) => {
		e.preventDefault();

		if (!this.checkIfGroupExists()) {
			this.props.addNewGroup(this.state.inputValue);
			this.setState({inputValue: ''})

		} else {
			alert('Group already exists. Please enter another group');
		}
	};

	checkIfGroupExists = () => {
		return this.props.groups.some(group => {
			return group.toLowerCase() === this.state.inputValue.toLowerCase();
		});
	};

	render() {
		const { groups, activeFilter, setActiveFilter } = this.props;
		const { addGroupMode, inputValue } = this.state;

		return (
			<Nav>
				<NavDropdown id="groups"
				             title="Filter by Group"
				             onToggle={this.toggleDropDown}>

					<AddGroup addGroupMode={addGroupMode}
					          inputValue={inputValue}
					          enableAdding={this.enableAddingMode}
					          onInputChange={this.handleInputChange}
					          onFormSubmit={this.submitForm}/>

					<MenuItem divider/>

					<GroupsList groups={groups}
					            onSetFilter={setActiveFilter}
					            filter={activeFilter}/>
				</NavDropdown>
			</Nav>
		)
	}
}

export default GroupsDropDown;