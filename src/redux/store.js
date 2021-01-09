//Create constants for actionCreators
import profileReducer from "./profile-reducer";
import messengerReducer from "./messenger-reducer";

const store = {
    //Function rerender will run if everything subscribe on it
    _subscriber(){
        console.log('Нет подписчиков');
    },
    //state invisible
    _state: {
        profilePage: {
            //Массив записей на стене
            posts: [],
            newPostText: '',
            postId: 1
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
            messages: [],
            newMessageText: '',
            messageId: 1
        },
        friends: [
            {id: 1, name: 'Макс', photo: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg'},
            {id: 2, name: 'Саша', photo: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg'},
            {id: 3, name: 'Лера', photo: 'https://avatarko.ru/img/kartinka/9/igra_multfilm_minion_Hitman_8973.jpg'},
            {id: 4, name: 'Инокентий', photo: 'https://bugaga.ru/uploads/posts/2012-01/1327530915_avatar-1.jpg'},
        ]
    },
    //return this state
    getState(){
      return this._state;
    },
   //Update subscribers and redefine function _subscriber
    subscribe(observer){
        this._subscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messengerReducer(this._state.messagesPage, action);
        this._subscriber();
    },
}

export default store;