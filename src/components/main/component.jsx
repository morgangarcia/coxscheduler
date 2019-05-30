import React from 'react';
import PropTypes from 'prop-types';
import Slot from '../slot';
import Modal from '../modal';


/**
 * The Main Component where everything else lives
 * @param props - current state as props
 */
const Main = (props)=> {
    const {slots} = props;
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-5 col-xs-11 col-xs-offset-1">
                        <h3>Appointment Slots For Today</h3>
                    </div>
                </div>
                <div className="row col-md-offset-1 col-xs-offset-1 col-xs-11">
                    <div className="col-xs-offset-1 col-xs-10 slots-container">
                        {
                            slots.map((slot) => {
                                slot.name = slot.name ? slot.name : '';
                                slot.phone = slot.phone ? slot.phone : '';
                                return <Slot key={slot.index} slot = {slot}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal/>
        </div>
    );
};

Main.propTypes ={
    slots: PropTypes.array.isRequired
};

export default Main;
