import { ADD_GROUP } from '../constants';
import { data } from '../data';


const initialState =
	data.map(item => item.group)
			.sort()
			.filter((item, i, arr) => item !== arr[i-1]);

export default function groups(state = ['General',...initialState], action) {
	switch (action.type) {
		case ADD_GROUP:
			return 	[action.group, ...state];
		default:
			return state;
	}
}