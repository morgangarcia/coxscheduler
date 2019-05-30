/**
 * All Actions for the Modal
 * @param slot - Current Slot for which the modal is displayed
 */

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CLEAR_SLOT = 'CLEAR_SLOT';


export function showModal(slot) {
    return {
        type: SHOW_MODAL,
        payload: {
            slot
        }
    }
}

export function hideModal(index, reserved) {
    if(reserved) {
        return {
            type: HIDE_MODAL
        }
    }
    return function(dispatch) {
        dispatch({
            type: CLEAR_SLOT,
            payload: {
                index
            }
        });
        dispatch({
            type: HIDE_MODAL
        })
    }
}
