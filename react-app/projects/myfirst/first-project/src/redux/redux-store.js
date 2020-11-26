import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";
import friendsReducer from "./friends-reduser";

let reducers = combineReducers({
    messengerPage: messengerReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
});

let store = createStore(reducers);

export default store;