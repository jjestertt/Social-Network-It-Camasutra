import authApi from "../api/authApi";
import {stopSubmit} from "redux-form";
import securityApi from "../api/securityApi";


// create constants for reducer
const SET_USER_DATA = "my-net/auth/SET_USER_DATA";
const CLEAR_USER_DATA = "my-net/auth/CLEAR_USER_DATA";
const SET_LOGIN_CAPTCHA_URL = "my-net/auth/SET_LOGIN_CAPTCHA_URL";

// create initial state for reducer
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    loginCaptchaUrl: null,
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
        case SET_LOGIN_CAPTCHA_URL:{
            return {
                ...state,
                ...action.payload
            }
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
        data: {id, login, email, loginCaptchaUrl: null}
    }
}
const setLoginCaptchaUrl = (loginCaptchaUrl) => {
    return {
        type: SET_LOGIN_CAPTCHA_URL,
        payload : {loginCaptchaUrl}
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

export const getLoginCaptcha = () => async (dispatch) => {
    let data = await securityApi.getCaptcha();
    let captchaUrl = data.url;
    dispatch(setLoginCaptchaUrl(captchaUrl));
}

export const userLogin = (email, password, rememberMe = false, captcha= null) => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        if (data.resultCode === 10) {
            dispatch(getLoginCaptcha());
        }
        let action = stopSubmit('login', {_error: data.messages.map(el => el)});
        dispatch(action);
    }
}

export default authReducer;