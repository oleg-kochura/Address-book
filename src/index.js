import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore }          from 'redux';
import { Provider }             from 'react-redux';
import reducer                  from './reducers';
import App                      from './components/App';
import AddContact               from './components/Add-contact';
import ContactsList               from './components/Contacts-list';
import EditContact              from './components/Edit-contact';
import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ContactsList} />
				<Route path="add-contact" component={AddContact}/>
				<Route path="edit-contact/:id" component={EditContact}/>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
);
