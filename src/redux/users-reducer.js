import usersApi from "../api/usersApi";
import {updateObjectInArray} from "../utils/helpers";

const FOLLOW = 'my-net/users/FOLLOW';
const UNFOLLOW = 'my-net/users/UNFOLLOW';
const SET_USERS = 'my-net/users/SET_USERS';
const SET_FOLLOWING_PROGRESS = 'my-net/users/SET_FOLLOWING_PROGRESS';
const SET_CURRENT_PAGE = 'my-net/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'my-net/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCH = 'my-net/users/TOGGLE_IS_FETCH';

let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetch: false,
    followingProgress: []
}
//Reducer
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false}),
            }
        case SET_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetch
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id === !action.userId)
            }
        }
        case
        SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case
        SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case
        SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case
        TOGGLE_IS_FETCH: {
            return {...state, isFetch: action.isFetch}
        }
        default:
            return state;
    }
}


//Action creators
export const followSuccesfull = (userId) => {
    return ({type: FOLLOW, userId: userId});
}
export const unFollowSuccesfull = (userId) => {
    return ({type: UNFOLLOW, userId: userId})
}
export const setFollowingProgress = (isFetch, userId) => {
    return ({type: SET_FOLLOWING_PROGRESS, isFetch, userId})
}
export const setUsers = (users) => {
    return ({type: SET_USERS, users: users})
}
export const setCurrentPage = (currentPage) => {
    return ({type: SET_CURRENT_PAGE, currentPage})
}
export const setTotalUsersCount = (totalUsersCount, totalUsersCountReally) => {
    return ({type: SET_TOTAL_USERS_COUNT, totalUsersCount, totalUsersCountReally})
}
export const toggleIsFetch = (isFetch) => {
    return ({type: TOGGLE_IS_FETCH, isFetch})
}

//thunk
export const responseUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetch(true)); //enable preloader
    const data = await usersApi.getUsers(currentPage, pageSize) // run API method for get users on current page
    dispatch(setTotalUsersCount(data.totalCount)); // dispatch AC count all Users
    dispatch(setCurrentPage(currentPage));  // dispatch AC current page
    dispatch(setUsers(data.items));  // dispatch AC items of user
    dispatch(toggleIsFetch(false)); //disable preloader preloader
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingProgress(true, userId));  //disabled button follow/unfollow
    const data = await apiMethod(userId); // run API method for follow/unFollow
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId)); // if result code 0 then dispatch action creator to reducer
    }
    dispatch(setFollowingProgress(false, userId));
}
export const follow = (userId) => async (dispatch) => {
    const apiMethod = usersApi.followUser.bind(usersApi); // ==>
    //Так как может потеряться контекст обязательно используем метод bind
    const actionCreator = followSuccesfull; //create variable of actionCreator
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator); //this is main logic
}
export const unFollow = (userId) => async (dispatch) => {
    const apiMethod = usersApi.unFollowUser.bind(usersApi);// ==>
    //Так как может потеряться контекст обязательно используем метод bind
    const actionCreator = unFollowSuccesfull;//create variable of actionCreator
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator); //this is main logic

}

export default usersReducer;