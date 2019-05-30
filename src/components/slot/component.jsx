import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

/**
 * A Single Time SLot
 * @param props - current state as props
 */
const Slot = (props) => {
  const {
      slot
  } = props;

  const bsStyle = slot.reserved ? 'danger': 'success';

  return  <div className="row"><div className="col-md-4 col-md-offset-5"><Button onClick={() => props.onShowModal(slot)} className="appointment-slot" bsStyle={bsStyle}> {slot.time} </Button></div></div>
};

Slot.propTypes ={
    slot: PropTypes.shape({
      time: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired
    })
};

export default Slot;
