import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { setActiveFilter, addNewGroup } from '../actions';

class FilterGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newGroup: ''
		}
	}

	addNewGroup(event) {
		this.props.addNewGroup(this.state.newGroup);
		event.target.value = '';
	}

	filterBy(event) {
		this.props.filterByGroup(event.target.value)
	}

	render() {
		let groups = this.props.groups.map((group, index) => {
			return <option key={index} value={group}>{group}</option>
		});
		return (
			<div className="Filter">
				{/*<GroupsList/>*/}

				<label>
					<span>Add group:</span>
					<input onBlur={event => this.setState({newGroup: event.target.value})} type="text" className="add-group"/>
				</label>
				<button onClick={this.addNewGroup.bind(this)}>Add new group</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		groups: state.groups
	}
}

export default connect(mapStateToProps, { setActiveFilter, addNewGroup })(FilterGroup);