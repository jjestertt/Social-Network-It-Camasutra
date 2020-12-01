const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE_TEXT = 'ADD_NEW_MESSAGE_TEXT';

let initialState = {
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
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = {
                id: state.messageId,
                message: state.newMessageText
            }
            return {
                ...state,
                messageId: ++state.messageId,
                messages: [...state.messages, message],
                newMessageText: ''
            }
        }
        case ADD_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.value
            }
        }

        default:
            return state;
    }
}

export const addMessageCreator = () => {
    return {type: ADD_MESSAGE}
}
export const messageChangeCreator = (text) => {
    return ({
        type: ADD_NEW_MESSAGE_TEXT,
        value: text
    })
}
export default messengerReducer;