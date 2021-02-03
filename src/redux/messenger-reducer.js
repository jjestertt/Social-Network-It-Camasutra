const ADD_MESSAGE = "ADD_MESSAGE";


let initialState = {
    //Массив диалогов
    dialogs: [
        {id: 1, name: "Макс"},
        {id: 2, name: "Саша"},
        {id: 3, name: "Лера"},
        {id: 4, name: "Инокентий"},
        {id: 5, name: "Днепро"},
    ],
    //Массив сообщений
    messages: [],
    messageId: 1
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = {
                id: state.messageId,
                message: action.messageText
            }
            return {
                ...state,
                messageId: ++state.messageId,
                messages: [...state.messages, message],
            }
        }
        default:
            return state;
    }
}

export const addMessage = (messageText) => {
    return {type: ADD_MESSAGE, messageText}
}
export default messengerReducer;