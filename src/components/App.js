import React, { Component } from 'react';
import Layout from './Layout';

class App extends Component {
	render() {
		return (
	        <div className="App">
		        <Layout/>
		        {this.props.children}
	        </div>
        );
    }
}

export default App;