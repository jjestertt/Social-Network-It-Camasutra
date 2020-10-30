import React from 'react';
import style from './Message.module.css';
import MessageItem from "./MessageItem/MessageItem";


const Messages = (props) => {

    let dialogItem = props.messages.map(el => <MessageItem id={el.id} message={el.message} />);

    return (
            <div className={style.message}>
                <h2 className={style.title}>Message</h2>
                <ul className={style.list}>
                    {dialogItem}
                </ul>
            </div>
    );
}

export default Messages;