import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        //Массив записей на стене
        posts: [

        ],
        newPostText: ''
    },
    messagesPage: {
        //Массив диалогов
        dialogs: [
            {id: 1, name: 'Макс'},
            {id: 2, name: 'Саша'},
            {id: 3, name: 'Лера'},
            {id: 4, name: 'Инокентий'},
            {id: 5, name: 'Днепро'},
        ],
        //Массив сообщений
        messages: [
            {id: 1, message: 'Привет как дела?'},
            {id: 2, message: 'Давай дружить'},
            {id: 3, message: 'Водку пить'},
            {id: 4, message: 'Ыть'},
        ]
    },
    friends: [
        {id: 1, name: 'Макс', photo: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg'},
        {id: 2, name: 'Саша', photo: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
        {id: 3, name: 'Лера', photo: 'https://avatarko.ru/img/kartinka/9/igra_multfilm_minion_Hitman_8973.jpg'},
        {id: 4, name: 'Инокентий', photo: 'https://bugaga.ru/uploads/posts/2012-01/1327530915_avatar-1.jpg'},
        {
            id: 5,
            name: 'Днепро',
            photo: 'https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275820-stock-photo-business-man-suit-avatar.jpg'
        }
    ]
};

//Добавляем новый пост на стену на основе переменной state.profilePage.newPostText
export let addPost = () => {
    let newPost ={
        id: 5,
        userName: 'Сивак Максим',
        likeCounter: 0,
        postText: state.profilePage.newPostText
    }
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
//Обновляем текст ввденный в textarea на стене и записываем его в переменную state.profilePage.newPostText
export let updateNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}
export default state;




