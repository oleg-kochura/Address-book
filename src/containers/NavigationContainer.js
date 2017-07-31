import { connect }      from 'react-redux';
import { onFormAdding } from '../actions';
import Navigation       from '../components/NavBar/Navigation';


const NavigationContainer =  connect(null, { onFormAdding })(Navigation);

export default NavigationContainer;