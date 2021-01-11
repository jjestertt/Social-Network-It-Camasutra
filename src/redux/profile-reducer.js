import profileApi from "../api/profileApi";


const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const SET_USER_PROFILE_ABOUT = 'SET_USER_PROFILE_ABOUT';

let initialState = {
    posts: [],
    postId: 1,
    // userProfile: null,
    userProfile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    userProfileStatus: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postId,
                userName: 'Сивак Максим',
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
export const setUserProfileAboutMe = (aboutMe) =>{
    return ({type: SET_USER_PROFILE_ABOUT, aboutMe})
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
        if (data.resultCode === 0) {
            dispatch(updateUserProfileStatus(userProfileStatus));
        }
    });
}
export default profileReducer;