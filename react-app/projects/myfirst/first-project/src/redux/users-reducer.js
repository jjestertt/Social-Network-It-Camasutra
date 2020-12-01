const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1, isFollow: true,
        //     photoUrl: 'https://i04.fotocdn.net/s120/6e76a054c0d4b04a/user_xl/2749451533.jpg',
        //     fullName: 'Stasy Mikhael', status: 'Life is good Mazafakka', location: 'Kenig'
        // },
        // {
        //     id: 3, isFollow: true,
        //     photoUrl: 'https://muwhi.ru/wp-content/uploads/2019/10/solodkova.jpg',
        //     fullName: 'Lolly Lips', status: 'Hey guy', location: 'Internet'
        // },
        // {
        //     id: 4, isFollow: false,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Benny_Hill.JPG',
        //     fullName: 'Benny Hill', status: 'Im boss', location: 'Alabama'
        // }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollow: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollow: false}
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return ({type: FOLLOW, userId: userId});
}

export const unFollowAC = (userId) => {
    return ({type: UNFOLLOW, userId: userId})
}

export const setUsersAC = (users) => {
    return ({type: SET_USERS, users: users})
}

export default usersReducer;