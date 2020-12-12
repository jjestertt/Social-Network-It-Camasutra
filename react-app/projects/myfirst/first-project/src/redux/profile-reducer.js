import profileApi from "../api/profileApi";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [],
    newPostText: '',
    postId: 1,
    userProfile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postId,
                userName: 'Сивак Максим',
                likeCounter: 0,
                postText: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.value
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        default:
            return state;
    }
}

//Action Creator on addPost
export const addPostCreator = () => {
    return ({type: ADD_POST});
}
//Action Creator onPostChange
export const postChangeCreator = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, value: text});
}
export const setUserProfile = (userProfile) => {
    return ({type: SET_USER_PROFILE, userProfile});
}

//Замыкание thunk
export const getUsersProfile = (userId) => {
    return dispatch => {
        if (!userId) {
            userId = '13007';
        }
        profileApi.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}



export default profileReducer;