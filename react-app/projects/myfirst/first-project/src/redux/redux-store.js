import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reduser";



let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
});

let store = createStore(reducers);

export default store;