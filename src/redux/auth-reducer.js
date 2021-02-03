import authApi from "../api/authApi";
import {stopSubmit} from "redux-form";


// create constants for reducer
const SET_USER_DATA = "my-net/auth/SET_USER_DATA";
const CLEAR_USER_DATA = "my-net/auth/CLEAR_USER_DATA";

// create initial state for reducer
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
//create reducer
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
export const getAuth = () => async (dispatch) => {
    let data = await authApi.getAuth();
    if (data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.login, data.data.email));
    }
}

export const logout = () => async (dispatch) => {
    let data = await authApi.logout();
    if (data.resultCode === 0) {
        dispatch(clearUserData());
    }
}

export const userLogin = (email, password, rememberMe = false) => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        let action = stopSubmit('login', {_error: data.messages.map(el => el)});
        dispatch(action);
    }
}

export default authReducer;