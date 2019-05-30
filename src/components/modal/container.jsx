import {connect} from 'react-redux';
import AppointmentDetail from './component';
import {hideModal} from '../../actions/modalActions';
import {updateSlot, saveSlot, releaseSlot} from '../../actions/slotActions';
import modalSelector from '../../selectors/modal';

function mapStateToProps(state) {
    return {
        show: modalSelector(state).show,
        time: modalSelector(state).time,
        index: modalSelector(state).index,
        name: modalSelector(state).name,
        phone: modalSelector(state).phone,
        reserved: modalSelector(state).reserved
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onHideModal: (index, reserved) => dispatch(hideModal(index, reserved)),
        onReleaseSlot: (index) => dispatch(releaseSlot(index)),
        onSubmitModal: (index) => dispatch(saveSlot(index)),
        onHandleChange: (field, index, value) => dispatch(updateSlot(field, index, value))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetail);



