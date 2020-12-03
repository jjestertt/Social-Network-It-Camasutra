const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    friends: []
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, friends: [...action.friends] }
        default:
            return state;
    }
}
export const setFriends = (users) => {
    return {
        type: SET_FRIENDS,
        friends: users
    }
}
export default friendsReducer;