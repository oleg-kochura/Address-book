import React                    from 'react';
import ReactDOM                 from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore }          from 'redux';
import { Provider }             from 'react-redux';
import reducer                  from './reducers';
import App                      from './components/App';
import AddContact               from './components/Add-contact';
import ContactsList               from './components/Contacts-table';
import Home                     from './components/Home';
import EditContact              from './containers/Edit-contact';
import './index.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="add-contact" component={AddContact}/>
				<Route path="contacts" component={ContactsList}/>
				<Route path="edit-contact/:id" component={EditContact}/>
			</Route>
		</Router>
	</Provider>, document.getElementById('root')
);
