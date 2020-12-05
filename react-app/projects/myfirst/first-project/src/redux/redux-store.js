import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import friendsReducer from "./friends-reduсer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reduscer";

let reducers = combineReducers({
    messengerPage: messengerReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;