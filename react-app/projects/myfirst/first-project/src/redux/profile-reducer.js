const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
let initialState = {
    //Массив записей на стене
    posts: [],
    newPostText: '',
    postId: 1,
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
export default profileReducer;