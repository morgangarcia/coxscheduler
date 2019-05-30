import {connect} from 'react-redux';
import Slot from './component';
import {showModal} from "../../actions/modalActions";

function mapDispatchToProps(dispatch) {
    return {
        onShowModal: (slot) => dispatch(showModal(slot))
    };
}


export default connect(null, mapDispatchToProps)(Slot);



