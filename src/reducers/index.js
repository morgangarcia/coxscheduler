import { combineReducers } from "redux"
import slotsReducer from './slots';
import modalReducer from './modal';

/**
 * Combine reducers to form one reducer
 */
export default combineReducers({
    slotsReducer,
    modalReducer
})
