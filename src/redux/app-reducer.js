import {getAuth} from "./auth-reducer";
//Создаем константу успешной инициализации
const INITIALIZED_SUCCESS = 'my-net/app/INITIALIZED_SUCCESS'
//Инициализационный стейт редьюсера
let initialState = {
    //По умолчанию инициализация false
    initialized: false,
}

//Создаем редьюсер
const appReducer = (state = initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state;
        }
    }
}
//Вызываем action creator
const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
//call thunk first this first get Auth data
// then dispatch action creator to reducer
export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuth());
    await dispatch(initializedSuccess());
}

export default appReducer;