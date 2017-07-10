import React, { Component } from 'react';
import Layout               from './Layout';
import GroupsList           from './Groups-list';

class App extends Component {
	render() {
		return (
	        <div className="App">
		        <Layout>
			        <GroupsList/>
		        </Layout>
		        {this.props.children}
	        </div>
        );
    }
}

export default App;