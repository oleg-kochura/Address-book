import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Navbar }           from 'react-bootstrap';
import { FormGroup }        from 'react-bootstrap';
import { FormControl }      from 'react-bootstrap';
import { Button }           from 'react-bootstrap';

class Search extends Component {
	render() {
		return (
			<Navbar.Form className={this.props.visibility} pullRight>
				<FormGroup>
					<FormControl type="text" placeholder="Search" />
				</FormGroup>
				{/*{' '}*/}
				{/*<Button type="submit">Submit</Button>*/}
			</Navbar.Form>
		)
	}
}

function mapStateToProps(state) {
	return {
		groups: state.contacts
	}
}

export default connect(mapStateToProps, null)(Search);