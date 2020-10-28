import React from 'react';
import style from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";

const Messages = () => {
    return (
            <div className={style.message}>
                <h2 className={style.title}>Message</h2>
                <ul className={style.list}>
                    <MessageItem message="Привет как дела?" />
                    <MessageItem message="Меня зовут Макс" />
                    <MessageItem message="Давай дружить" />
                    <MessageItem message="Водку пить" />
                </ul>
            </div>
    );
}

export default Messages;