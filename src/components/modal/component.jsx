import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

/**
 * Appointment Detail Component For the Modal
 * @param props - current state as props
 */
const AppointmentDetail = (props) => {
  const {
      show,
      time,
      index,
      name,
      phone,
      reserved
  } = props;

  const getValidationState = (field) => {
      if(!field) {
          return 'error';
      }
      const length = field.trim().length;
      if(length > 0) {
          return 'success';
      }
      else {
          return 'error';
      }
  };

  const validatePhone = (phone) => {
    let valid = false;
    if(!phone) {
        return 'error';
    }
    try {
        valid = phone.match(/\d/g).length===10;
    }
    catch(err) {
        return 'error';
    }

    if(valid) {
        return 'success';
    }
    else {
        return 'error';
    }

  };

  const handleSubmit = () => {
    if(name.trim() !== '' && validatePhone(phone) === 'success') {
        props.onSubmitModal(index);
    }
  };

  return (
      <Modal show={show} onHide={() => props.onHideModal(index)}>
          <Modal.Header closeButton>
              <Modal.Title> Appointment for {time} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4>Please fill out the required details</h4>
              <form>
                  <FormGroup
                      controlId="formName"
                      validationState={getValidationState(name)}
                  >
                      <ControlLabel>Name:</ControlLabel>
                      <FormControl
                          type="text"
                          value={name}
                          placeholder="Enter Your Name"
                          onChange={(e) => props.onHandleChange('name', index, e.target.value)}
                      />
                      <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup
                      controlId="formPhone"
                      validationState={validatePhone(phone)}
                  >
                      <ControlLabel>Phone:</ControlLabel>
                      <FormControl
                          type="text"
                          value={phone}
                          placeholder="Enter Your Phone"
                          onChange={(e) => props.onHandleChange('phone', index, e.target.value)}
                      />
                      <FormControl.Feedback />
                  </FormGroup>
              </form>
          </Modal.Body>
          <Modal.Footer>
              { reserved && <Button onClick={() => props.onReleaseSlot(index)}>Release Slot</Button> }
              <Button bsStyle="danger" onClick={() => props.onHideModal(index, reserved)}>Close</Button>
              <Button bsStyle="success" onClick={handleSubmit}>Submit</Button>
          </Modal.Footer>
      </Modal>
  )
};

AppointmentDetail.propTypes ={
    show: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired
};

export default AppointmentDetail;
