import authApi from "../api/authApi";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                ...action.data,

            }
        case CLEAR_USER_DATA: {
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }
        }
        default:
            return state;
    }
}
const setUserData = (id, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email}
    }
}
const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA
    }
}

//thunk
export const getAuth = () => (dispatch) => {
    return  authApi.getAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data.id, data.data.login, data.data.email));
        }
    });
}

export const logout = () => (dispatch) => {
    authApi.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(clearUserData());
        }
    })
}
export const userLogin = (email, password, rememberMe = false) => (dispatch) => {
    authApi.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuth())
        }
        else {
            let action = stopSubmit('login', {_error: data.messages.map(el => el)});
            dispatch(action);
        }
    });
}

export default authReducer;