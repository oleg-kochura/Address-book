import React                    from 'react';
import ReactDOM                 from 'react-dom';
import {
	Router,
	Route,
	IndexRoute,
	browserHistory
}                               from 'react-router';
import {
	createStore,
	applyMiddleware
}                               from 'redux';
import thunk                    from 'redux-thunk';
import { Provider }             from 'react-redux';
import { composeWithDevTools }  from 'redux-devtools-extension';
import reducer                  from './reducers';
import App                      from './components/App';
import AddContact               from './components/AddContact/Add-contact';
import TableContainer           from './containers/TableContainer';
import Home                     from './components/Home';
import EditContact              from './containers/Edit-contact';
import './index.css';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="add-contact" component={AddContact}/>
				<Route path="contacts" component={TableContainer}/>
				<Route path="edit-contact/:id" component={EditContact}/>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
);
