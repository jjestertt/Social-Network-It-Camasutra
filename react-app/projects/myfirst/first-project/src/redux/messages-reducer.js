const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_NEW_MESSAGE_TEXT ='ADD_NEW_MESSAGE_TEXT';

const messagesReducer = (state, action) =>{
    switch (action.type){
        case ADD_MESSAGE:
            let message = {
                id: state.messageId,
                message: state.newMessageText
            }
            state.messages.push(message);
            //Прибавляем значение id сообщения
            state.messageId++;
            //Очищаем textarea
            state.newMessageText = '';
            return state;
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}


export const addMessageCreator = () =>{
    return {type: ADD_MESSAGE}
}
export const onMessageChangeCreator = (text) =>{
    return({
        type: ADD_NEW_MESSAGE_TEXT,
        value: text
    })
}
export default messagesReducer;