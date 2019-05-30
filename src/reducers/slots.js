import * as modalActions from '../actions/modalActions';
import * as slotActions from '../actions/slotActions';

const slot = (time, index) => {
    return {

        time,
        reserved: false,
        name: '',
        phone: ''
    }
};

const timeOptions = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const initializeSlots = timeOptions.map((time, index) => slot(time, index));

/**
 * Reducer for a slot
 * @param state - Current State
 * @param action - Action Fired by the dispatcher
 */
export default function reducer(state = {
    slots: initializeSlots
}, action) {

    switch (action.type) {
        case slotActions.UPDATE_SLOT:
            return {
                ...state, slots: [
                    ...state.slots.slice(0, action.payload.index),
                    {
                        ...state.slots[action.payload.index],
                        [action.payload.field]: action.payload.value

                    },
                    ...state.slots.slice(action.payload.index + 1)
                ]
            };
        case slotActions.SAVE_SLOT:
            return {
                ...state, slots: [
                    ...state.slots.slice(0, action.payload.index),
                    {
                        ...state.slots[action.payload.index],
                        reserved: true

                    },
                    ...state.slots.slice(action.payload.index + 1)
                ]
            };
        case slotActions.RELEASE_SLOT:
            return {
                ...state, slots: [
                    ...state.slots.slice(0, action.payload.index),
                    {
                        ...state.slots[action.payload.index],
                        name: '',
                        phone: '',
                        reserved: false

                    },
                    ...state.slots.slice(action.payload.index + 1)
                ]
            };
        case modalActions.CLEAR_SLOT:
            return {
                ...state, slots: [
                    ...state.slots.slice(0, action.payload.index),
                    {
                        ...state.slots[action.payload.index],
                        name: '',
                        phone: ''
                    },
                    ...state.slots.slice(action.payload.index + 1)
                ]
            };
    }

    return state;
}
