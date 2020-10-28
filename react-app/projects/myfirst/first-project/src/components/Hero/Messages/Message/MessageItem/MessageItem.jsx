import React from 'react';
import style from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <li className={style.item}>
            <p className={style.text}>{props.message}</p>
        </li>
    );
}

export default MessageItem;