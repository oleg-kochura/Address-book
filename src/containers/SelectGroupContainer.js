import { connect }  from 'react-redux';
import SelectGroup  from '../components/Select-group';


const mapStateToProps = ({groups, fields}) => {
	return {
		groups,
		selected: fields.group.value !== '' ? fields.group.value : 'General'
	};
};

const SelectGroupContainer = connect(mapStateToProps, null)(SelectGroup);

export default SelectGroupContainer;