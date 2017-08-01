import React                from 'react';
import NavigationContainer  from '../containers/NavigationContainer';
import DropDownContainer    from '../containers/DropDownContainer';
import SearchContainer      from '../containers/SearchContainer';


const App = (props) => (
	<div className="App">
		<NavigationContainer>
			{
				props.location.pathname === '/contacts' &&

					<div>
						<SearchContainer/>
						<DropDownContainer/>
					</div>

			}
		</NavigationContainer>

		{props.children}

	</div>
);


export default App;