import {getAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,
}

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

const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
} //action creator return object of type for dispatching to reducer

export const initializeApp = () => (dispatch) => {
    let initial =  dispatch(getAuth());
    initial.then(()=>{dispatch(initializedSuccess())});
}

export default appReducer;