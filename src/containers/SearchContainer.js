import { connect }          from 'react-redux';
import { onSearchContact }  from '../actions';
import Search               from '../components/NavBar/Search';


const SearchContainer = connect(null, { onSearchContact })(Search);

export default SearchContainer;