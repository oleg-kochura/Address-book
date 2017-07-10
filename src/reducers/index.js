import { combineReducers }  from 'redux';
import common               from './common';
import contacts             from './contacts';
import groups               from './groups';

export default combineReducers({
	common,
	contacts,
	groups
});
