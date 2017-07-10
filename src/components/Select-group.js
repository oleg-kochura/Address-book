import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { FormGroup }        from 'react-bootstrap';
import { ControlLabel }     from 'react-bootstrap';
import { FormControl }      from 'react-bootstrap';

class SelectGroup extends Component {
	render() {
		const options = this.props.groups.map((group, index) => {
			return <option key={index} value={group}>{group}</option>
		});

		return (
			<FormGroup>
			    <ControlLabel>Select</ControlLabel>
			    <FormControl onChange={this.props.onChange} componentClass="select" name="group">
			        {options}
			    </FormControl>
			</FormGroup>
		)
	}
}

function mapStateToProps(state) {
	return {
		groups: state.groups
	}
}

export default connect(mapStateToProps, null)(SelectGroup);