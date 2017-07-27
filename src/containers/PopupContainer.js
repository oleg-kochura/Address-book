import { connect }  from 'react-redux';
import {
	onToggleModal,
	onAddField
}                   from '../actions';
import Popup        from '../components/Popup';


const getFields = fields => Object.values(fields).filter(field => !field.visible);

const mapStateToProps = ({fields, common: {showModal}}) => {
	return {
		fields: getFields(fields),
		showModal
	}
};

const PopupContainer = connect(mapStateToProps, {
	onToggleModal,
	onAddField
})(Popup);

export default PopupContainer;