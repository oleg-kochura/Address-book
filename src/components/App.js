import React            from 'react';
import Navigation       from '../containers/Navigation';
import DropDownContainer   from '../containers/DropDownContainer';
import SearchContainer  from '../containers/SearchContainer';


const App = (props) => (
	<div className="App">
		<Navigation>
			{
				props.location.pathname === '/contacts' &&
					<div>
						<SearchContainer/>
						<DropDownContainer/>
					</div>
			}
		</Navigation>


		{props.children}
	</div>
);


export default App;