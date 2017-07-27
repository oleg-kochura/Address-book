import { combineReducers }  from 'redux';
import common               from './common';
import contacts             from './contacts';
import groups               from './groups';
import form               from './form';
import fields               from './formFields';

export default combineReducers({
	common,
	contacts,
	groups,
	fields,
	form
});
