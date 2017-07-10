import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setActiveFilter }  from '../actions';
import { MenuItem }         from 'react-bootstrap';
import { Nav }              from 'react-bootstrap';
import { NavDropdown }      from 'react-bootstrap';

class GroupsList extends Component {

	filterByGroup(index) {
		this.props.setActiveFilter(this.props.groups[index]);
	}

	render() {
		let menuItems = this.props.groups.map((group, index) => {
			return  <MenuItem key={index} onClick={() => this.filterByGroup(index)}>{group}</MenuItem>
		});

		return (
			<Nav pullRight>
				<NavDropdown title="Groups" id="groups">
					{menuItems}
				</NavDropdown>
			</Nav>
		)
	}
}

function mapStateToProps(state) {
	return {
		groups: state.groups
	}
}

export default connect(mapStateToProps, {setActiveFilter})(GroupsList);