import React from 'react';
import style from "./AddMessage.module.css";


const AddMessage = (props) => {
    //Добовляем новое сообщение и записываем его в массив state.messagePage.messages
    const onAddMessage = (e) => {
        e.preventDefault();
        props.addMessage();
    }
    //Обновляем текст введенный в textarea в сообщениях и записываем его в переменную state.messagePage.newMessageText
    const onMessageChange = (event) => {
        let text = event.target.value;
        props.messageChange(text)
    }

    return (
        <form className={style.newMessage} action="">
            <textarea
                className={style.addMessage}
                onChange={onMessageChange}
                placeholder="Add message"
                value={props.newMessageText}
            />
            <button onClick={onAddMessage} type="submit">Send</button>
        </form>
    )
}

export default AddMessage;