import { connect }          from 'react-redux';
import FieldsList           from '../components/Form/Fields-list';
import { getFieldsToValidate }  from '../validation/validate';

const sorting = (a, b) => {
	if (a.position > b.position) return 1;
	if (a.position < b.position) return -1;
};

const mapStateToProps = ({fields}) => {
	return {
		fields: getFieldsToValidate(fields).sort(sorting)
	};
};

const FieldsContainer = connect(mapStateToProps, null)(FieldsList);

export default FieldsContainer;