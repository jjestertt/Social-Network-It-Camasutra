const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: state.postId,
                userName: 'Сивак Максим',
                likeCounter: 0,
                postText: state.newPostText
            };
            state.posts.push(newPost);
            //Прибавляем значение id поста на 1
            state.postId++;
            //Очищаем textarea
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.value;
            return state;
        default:
            return state;
    }
}

//Action Creator on addPost
export const addPostCreator = () =>{
    return ({type: ADD_POST});
}
//Action Creator onPostChange
export const onPostChangeCreator = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, value: text});
}

export default profileReducer;