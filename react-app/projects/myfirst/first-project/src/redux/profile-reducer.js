import profileApi from "../api/profileApi";


const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

let initialState = {
    posts: [],
    newPostText: '',
    postId: 1,
    userProfile: null,
    userProfileStatus: ''
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
                postId: newPost.id + 1,
                newPostText: '',
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(object => object.id !== action.postId)
            }
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
        case SET_USER_PROFILE_STATUS: {
            return {
                ...state,
                userProfileStatus: action.userProfileStatus
            }
        }
        default:
            return state;
    }
}

//Action Creator on addPost
export const addPost = () => {
    return ({type: ADD_POST});
}
export const deletePost = (postId) => {
    return ({type: DELETE_POST, postId});
}
//Action Creator onPostChange
export const postChange = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, value: text});
}
export const setUserProfile = (userProfile) => {
    return ({type: SET_USER_PROFILE, userProfile});
}
export const updateUserProfileStatus = (userProfileStatus) => {
    return ({type: SET_USER_PROFILE_STATUS, userProfileStatus});
}

//Замыкание thunk
export const getUsersProfile = (userId) => {
    return dispatch => {
        profileApi.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getUserProfileStatusFromSever = (userId) => dispatch => {
    profileApi.getUserProfileStatusFromServer(userId).then(data => {
        dispatch(updateUserProfileStatus(data));
    });
}
export const setUserProfileStatusToServer = (userProfileStatus) => dispatch => {
    profileApi.setUserProfileStatusToServer(userProfileStatus).then(data => {
        if(data.resultCode === 0){
            dispatch(updateUserProfileStatus(userProfileStatus));
        }
    });
}
export default profileReducer;