import React        from 'react';
import Navigation   from '../containers/Navigation';
import GroupsList   from './Groups-dropdown';
import Search       from '../components/Search';


const App = (props) => (
	<div className="App">
		<Navigation>
			{
				props.location.pathname === '/contacts' &&
					<div>
						<Search/>
						<GroupsList/>
					</div>
			}
		</Navigation>


		{props.children}
	</div>
);


export default App;