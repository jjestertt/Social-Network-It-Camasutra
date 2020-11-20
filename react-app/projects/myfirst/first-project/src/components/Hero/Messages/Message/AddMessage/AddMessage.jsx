import React from 'react';
import style from "./AddMessage.module.css";
import {addMessageCreator, onMessageChangeCreator} from "../../../../../redux/messages-reducer";

const AddMessage = (props) => {
    //Добовляем новое сообщение и записываем его в массив state.messagePage.messages
    const addMessage = (e) => {
        e.preventDefault();
        //Send to dispatch function ActionCreator
        props.dispatch(addMessageCreator());
    }

    //Обновляем текст введенный в textarea в сообщениях и записываем его в переменную state.messagePage.newMessageText
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(onMessageChangeCreator(text));
    }

    return (
        <form className={style.newMessage} action="">
            <textarea
                className={style.addMessage}
                onChange={onMessageChange}
                placeholder="Add message"
                value={props.newMessageText}
            />
            <button onClick={addMessage} type="submit">Send</button>
        </form>
    )
}

export default AddMessage;