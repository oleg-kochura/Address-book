import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setActiveFilter }  from '../actions';
import { MenuItem }         from 'react-bootstrap';
import { Nav }              from 'react-bootstrap';
import { NavDropdown }      from 'react-bootstrap';

class GroupsList extends Component {
	render() {
		return (
			<Nav className={this.props.visibility} >
				<NavDropdown title="Filter by Group" id="groups">
					{this.props.groups.map(group =>
						<MenuItem key={group} onClick={() => this.props.setActiveFilter(group)}>{group}</MenuItem>
					)}
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

export default connect(mapStateToProps, { setActiveFilter })(GroupsList);

// import React            from 'react';
// import { MenuItem }     from 'react-bootstrap';
// import { Nav }          from 'react-bootstrap';
// import { NavDropdown }  from 'react-bootstrap';
//
// const GroupsList = ({groups, onFilterSelect}) => (
//
// 	<Nav pullRight>
// 		<NavDropdown title="Filter by Group" id="groups">
// 			{groups.map(group =>
// 					<MenuItem key={group} onClick={() => onFilterSelect(group)}>{group}</MenuItem>
// 			)}
// 		</NavDropdown>
// 	</Nav>
// );
//
// export default GroupsList;