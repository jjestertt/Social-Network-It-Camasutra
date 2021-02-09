import profileApi from "../api/profileApi";
import {stopSubmit} from "redux-form";


const ADD_POST = "my-net/profile/ADD_POST";
const DELETE_POST = "my-net/profile/DELETE_POST";
const SET_USER_PROFILE = "my-net/profile/SET_USER_PROFILE";
const SET_USER_PROFILE_STATUS = "my-net/profile/SET_USER_PROFILE_STATUS";
const SET_USER_PROFILE_ABOUT = "my-net/profile/SET_USER_PROFILE_ABOUT";
const SET_USER_PHOTOS = "SET_USER_PHOTOS";

let initialState = {
    posts: [],
    postId: 1,
    userProfile: null,
    userProfileStatus: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postId,
                userName: "Сивак Максим",
                likeCounter: 0,
                postText: action.postText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postId: newPost.id + 1,
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(object => object.id !== action.postId)
            }
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
        case SET_USER_PHOTOS: {
            return {
                ...state,
                userProfile: {
                    ...state.userProfile, photos: action.photos
                }
            }
        }
        case SET_USER_PROFILE_ABOUT: {
            return {
                ...state,
                userProfile: {...state.userProfile, aboutMe: action.aboutMe}
            }
        }
        default:
            return state;
    }
}

//Action Creator on addPost
export const addPost = (postText) => {
    return ({type: ADD_POST, postText});
}
export const deletePost = (postId) => {
    return ({type: DELETE_POST, postId});
}
export const setUserProfile = (userProfile) => {
    return ({type: SET_USER_PROFILE, userProfile});
}
export const updateUserProfileStatus = (userProfileStatus) => {
    return ({type: SET_USER_PROFILE_STATUS, userProfileStatus});
}
export const setUserProfileAboutMe = (aboutMe) => {
    return ({type: SET_USER_PROFILE_ABOUT, aboutMe})
}
const setUserPhotos = (photos) => {
    return ({type: SET_USER_PHOTOS, photos})
}
//Замыкание thunk
export const getUsersProfile = (userId) => {
    return dispatch => {
        profileApi.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getUserProfileStatusFromSever = (userId) => async (dispatch) => {
    const data = await profileApi.getUserProfileStatusFromServer(userId);
    dispatch(updateUserProfileStatus(data));
}
export const setUserProfileStatusToServer = (userProfileStatus) => async (dispatch) => {
    const data = await profileApi.setUserProfileStatusToServer(userProfileStatus)
    if (data.resultCode === 0) {
        dispatch(updateUserProfileStatus(userProfileStatus));
    }
}
export const updateUserPhoto = (userPhoto) => async (dispatch) => {
    const data = await profileApi.updateUserPhoto(userPhoto)
    if (data.resultCode === 0) {
        dispatch(setUserPhotos(data.data.photos))
    }
}
export const updateProfileData = (profileData) => async (dispatch, getState) => {
    const myOwnId = getState().auth.id;
    const data = await profileApi.updateProfileData(profileData);
    if (data.resultCode === 0) {
        dispatch(getUsersProfile(myOwnId));
    } else {
        // let parseErrorFieldName = (array) => {
        //     const nameErrorField = (array[0].split(">")[1].slice(0, -1).toLowerCase());
        //     const errors = {contacts:{}};
        //     errors.contacts[nameErrorField] = array[0];
        //     return errors;
        // }
        // dispatch(stopSubmit("aboutMe", parseErrorFieldName(data.messages)));
        // dispatch(stopSubmit("aboutMe", {contacts : {facebook : 'ALYARMA', website: 'toge alyarma'}}));
        dispatch(stopSubmit("aboutMe", {_error: data.messages.map(message => message)}));
        return Promise.reject(data.messages.map(message => message));
    }
}
export default profileReducer;