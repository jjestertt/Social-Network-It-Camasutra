import React from 'react';
import AddMessage from "./AddMessage";
import {addMessageCreator, onMessageChangeCreator} from "../../../../../redux/messages-reducer";

const AddMessageContainer = (props) => {
    let state = props.store.getState().messagesPage;
    //Добовляем новое сообщение и записываем его в массив state.messagePage.messages
    const addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    //Обновляем текст введенный в textarea в сообщениях и записываем его в переменную state.messagePage.newMessageText
    const messageChange = (text) => {
        props.store.dispatch(onMessageChangeCreator(text));
    }

    return (
        <AddMessage messageChange={messageChange} addMessage={addMessage}
                    newMessageText={state.newMessageText}/>
    )
}

export default AddMessageContainer;