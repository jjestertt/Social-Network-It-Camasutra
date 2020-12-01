import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import friendsReducer from "./friends-reduser";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    messengerPage: messengerReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;