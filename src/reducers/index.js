import { combineReducers }  from 'redux';
import contacts             from './contacts';
import groups               from './groups';

export default combineReducers({
	contacts,
	groups
});
