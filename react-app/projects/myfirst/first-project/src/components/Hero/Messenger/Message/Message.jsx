import React from 'react';
import style from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";


const Message = (props) => {
    let message = props.messages
        .map(el => <MessageItem key={el.id} id={el.id} message={el.message}/>);

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
        <div className={style.message}>
            <h2 className={style.title}>Message</h2>
            <ul className={style.list}>
                {message}
            </ul>
            <form className={style.newMessage} action="">
                <textarea
                    className={style.addMessage}
                    onChange={onMessageChange}
                    placeholder="Add message"
                    value={props.newMessageText}
                />
                <button onClick={onAddMessage} type="submit">Send</button>
            </form>
        </div>
    );
}

export default Message;