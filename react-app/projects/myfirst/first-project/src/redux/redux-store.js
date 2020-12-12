import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import friendsReducer from "./friends-reduсer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reduscer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    messengerPage: messengerReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;