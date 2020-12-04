const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage : 1,
    isFetch: false
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
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCH: {
            return {...state, isFetch: action.isFetch}
        }
        default:
            return state;
    }
}


//Action creators
export const follow = (userId) => {
    return ({type: FOLLOW, userId: userId});
}
export const unFollow = (userId) => {
    return ({type: UNFOLLOW, userId: userId})
}
export const setUsers = (users) => {
    return ({type: SET_USERS, users: users})
}
export const setCurrentPage = (currentPage) => {
    return ({ type: SET_CURRENT_PAGE, currentPage})
}
export const setTotalUsersCount = (totalUsersCount) => {
    return ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount})
}
export const toggleIsFetch = (isFetch) => {
    return ({ type: TOGGLE_IS_FETCH, isFetch})
}

export default usersReducer;