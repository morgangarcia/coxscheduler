import {connect} from 'react-redux';
import Component from './component';
import slotsSelector from '../../selectors/slots';

function mapStateToProps(state) {
    return {
        slots: slotsSelector(state).slots
    }
}


export default connect(mapStateToProps, null)(Component);



