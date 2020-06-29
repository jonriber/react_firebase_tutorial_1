import FirebaseService from '../util/services/FirebaseService';
import {combineReducers} from 'redux';

//function userReducer definition with state and actions as parameters
export function userReducer(state=null,action) {
    if (action.type === 'LOGIN') {
        return action.user;
    }

    if (action.type === 'LOGOUT') {
        FirebaseService.logout();
        return null;
    }

    return state;
}

export default combineReducers({userAuth: userReducer});
