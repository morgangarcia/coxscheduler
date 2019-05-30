/**
 * All Actions for the slot
 * @param field - Field to be updated
 * @param index - current index for the slot
 * @param value - value to be set
 */

import {HIDE_MODAL} from './modalActions';

export const UPDATE_SLOT = 'UPDATE_SLOT';
export const SAVE_SLOT = 'SAVE_SLOT';
export const RELEASE_SLOT = 'RELEASE_SLOT';
export const UPDATE_FIELD = 'UPDATE_FIELD';


export function updateSlot(field, index, value) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_SLOT,
            payload: {
                index,
                field,
                value
            }
        });
        dispatch({
            type: UPDATE_FIELD,
            payload: {
                field,
                value
            }
        })
    }
}

export function saveSlot(index) {
    return function(dispatch) {
        dispatch({
            type: SAVE_SLOT,
            payload: {
                index
            }
        });
        dispatch({
            type: HIDE_MODAL
        })
    }
}

export function releaseSlot(index) {
    return function(dispatch) {
        dispatch({
            type: RELEASE_SLOT,
            payload: {
                index
            }
        });
        dispatch({
            type: HIDE_MODAL
        })
    }
}
