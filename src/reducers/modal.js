/**
 * Reducer for the modal
 * @param state - current state of the application
 * @param action - action fired by the dispatcher
 */

import * as modalActions from '../actions/modalActions';
import * as slotActions from '../actions/slotActions';

export default function reducer(state={
    modal: {
        showModal: false,
        time: '',
        name: '',
        phone: ''
    }
}, action) {

    switch(action.type) {
        case modalActions.SHOW_MODAL:
            return {...state, modal:{
                ...state.modal,
                    showModal:true,
                    time: action.payload.slot.time,
                    index: action.payload.slot.index,
                    name: action.payload.slot.name,
                    phone: action.payload.slot.phone,
                    reserved: action.payload.slot.reserved
                }
            };
        case modalActions.HIDE_MODAL:
            return {...state, modal:{...state.modal, showModal:false, time: '', name: '', phone: ''}};
        case slotActions.UPDATE_FIELD:
            return {...state, modal:{...state.modal, [action.payload.field]: action.payload.value}};
    }

    return state;
}
