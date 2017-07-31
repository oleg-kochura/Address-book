import { connect }          from 'react-redux';
import { setActiveFilter }  from '../actions';
import { addNewGroup }      from '../actions';
import GroupsDropDown       from '../components/NavBar/Groups-dropdown';


const mapStateToProps = ({groups, common: {activeFilter}}) => {
	return {
		groups,
		activeFilter
	}
};

const DropDownContainer =  connect(mapStateToProps, {
	setActiveFilter,
	addNewGroup
})(GroupsDropDown);

export default DropDownContainer;