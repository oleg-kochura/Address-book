import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setActiveFilter }  from '../actions';
import { addNewGroup }      from '../actions';
import { MenuItem }         from 'react-bootstrap';
import { Nav }              from 'react-bootstrap';
import { NavDropdown }      from 'react-bootstrap';
import AddGroup             from './Add-group';

class GroupsDropDown extends  Component {
	state = { isOpen: false };

	render() {
		const {
			groups,
			addNewGroup,
			activeFilter,
			setActiveFilter
		} = this.props;

		return (
			<Nav>
				<NavDropdown title="Filter by Group" id="groups"
				             onToggle={(isOpen) => this.setState({isOpen})}>

					<AddGroup onAddGroup={addNewGroup}
					          groups={groups}
					          isOpen={this.state.isOpen}/>

					<MenuItem divider/>

					{groups.map((group, index) =>
						<MenuItem key={index}
						          onClick={() => setActiveFilter(group)}
						          className={group === activeFilter && 'active'}>

							{group}
						</MenuItem>
					)}
				</NavDropdown>
			</Nav>
		)
	}
}
function mapStateToProps({groups, common: {activeFilter}}) {
	return {
		groups,
		activeFilter
	}
}

export default connect(mapStateToProps, {
	setActiveFilter,
	addNewGroup
})(GroupsDropDown);