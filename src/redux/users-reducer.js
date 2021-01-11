import usersApi from "../api/usersApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH';

let initialState = {
    users: [],
    pageSize: 100,
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
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
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
export const responseUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetch(true));
    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetch(false));
            dispatch(setTotalUsersCount(data.totalCount)); //first its not really total count
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
        });
}
export const follow = (userId) => (dispatch) => {
    dispatch(setFollowingProgress(true, userId));
    usersApi.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccesfull(userId));
        }
        dispatch(setFollowingProgress(false, userId));
    });
}
export const unFollow = (userId) => (dispatch) => {
    dispatch(setFollowingProgress(true, userId));
    usersApi.unFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollowSuccesfull(userId));
        }
        dispatch(setFollowingProgress(false, userId));
    });
}

export default usersReducer;