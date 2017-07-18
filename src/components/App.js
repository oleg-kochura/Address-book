import React        from 'react';
import Navigation   from '../containers/Navigation';
import GroupsList   from '../components/Groups-list';
import Search   from '../components/Search';

const App = (props) => (

	<div className="App">
		<Navigation>
			<Search visibility={props.location.pathname !== '/contacts' && 'hidden'}/>

			<GroupsList visibility={props.location.pathname !== '/contacts' && 'hidden'}/>
		</Navigation>

		{props.children}
	</div>
);

export default App;